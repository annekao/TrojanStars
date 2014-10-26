var pageCount = 0;
var currentTabId = null;
var currentSite = null;
var domain = /^[\w-]+:\/*\[?([\w\.:-]+)\]?(?::\d+)?/;


function getSiteFromUrl(url) {
  var match = url.match(domain);
  if (match) {
    console.log(match[1]);
    return match[1];
  }
  return null;
}

function updateTime(site, seconds) {
  var loc = site.indexOf('twitter.com');
  if(loc != -1){
    var val = parseInt(localStorage['twitter']) + parseInt(seconds);
    localStorage['twitter'] = val;
  }

  loc = site.indexOf('facebook.com');
  if(loc != -1){
    var val = parseInt(localStorage['facebook']) + parseInt(seconds);
    localStorage['facebook'] = val;
  }
  console.log("Time: " + seconds);
  // var sites = JSON.parse(localStorage.sites);
  // if (!sites[site]) {
  //   sites[site] = 0;
  // }
  // sites[site] = sites[site] + seconds;
  // localStorage.sites = JSON.stringify(sites);
}

function updateCounter(){
  var tabInt = 0;
  if (currentTabId == null) {
        return;
      }

      chrome.tabs.get(currentTabId, function(tab) {
        /* Make sure we're on the focused window, otherwise we're recording bogus stats. */
        chrome.windows.get( tab.windowId, function(window) {
          if (!window.focused) {
            return;
          }
          var site = getSiteFromUrl(tab.url);
          if (site == null) {
            console.log("Unable to update counter. Malformed url.");
            return;
          }

          /* We can't update any counters if this is the first time visiting any
           * site. This happens on browser startup. Initialize some variables so
           * we can perform an update next time. */
          if (currentSite == null) {
            currentSite = site;
            startTime = new Date();
            return;
          }

          /* Update the time spent for this site by comparing the current time to
           * the last time we were ran. */
          var now = new Date();
          var delta = now.getTime() - startTime.getTime();
          updateTime(currentSite, delta/1000);

          /* This function could have been called as the result of a tab change,
           * which means the site may have changed. */
          currentSite = site;
          startTime = now;
        });
      });
}

function initialize(){
  if (!localStorage.sites) {
    localStorage.sites = JSON.stringify({});
  }
  localStorage['twitter'] = 0;
  localStorage['facebook']=0;

  chrome.tabs.onActivated.addListener(
    function(tab) {
      // console.log("Tab changed");
      currentTabId = tab.tabId;
      updateCounter();
    });

  chrome.windows.onFocusChanged.addListener(
    function(windowId) {
    	if(windowId != null){
      		// console.log("Detected window focus changed.");
      		chrome.tabs.getSelected(windowId,
	        	function(tab) {
	         	// console.log("Window/Tab changed");
	        	currentTabId = tab.id;
	        	updateCounter();
        	});
  		}
    });

}

document.addEventListener('DOMContentLoaded', function () { 
  initialize();
});
