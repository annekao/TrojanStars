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
  // SOCIAL 
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

  loc = site.indexOf('instagram.com');
  if(loc != -1){
    var val = parseInt(localStorage['instagram']) + parseInt(seconds);
    localStorage['instagram'] = val;
  }

  // ACADEMIC
  loc = site.indexOf('.edu');
  if(loc != -1){
    var val = parseInt(localStorage['.edu']) + parseInt(seconds);
    localStorage['.edu'] = val;
  }

  loc = site.indexOf('piazza.com');
  if(loc != -1){
    var val = parseInt(localStorage['piazza']) + parseInt(seconds);
    localStorage['piazza'] = val;
  }

  loc = site.indexOf('wikipedia.org');
  if(loc != -1){
    var val = parseInt(localStorage['wikipedia']) + parseInt(seconds);
    localStorage['wikipedia'] = val;
  }

  // NEWS
  loc = site.indexOf('wsj.com');
  if(loc != -1){
    var val = parseInt(localStorage['WSJ']) + parseInt(seconds);
    localStorage['WSJ'] = val;
  }

  loc = site.indexOf('latimes.com');
  if(loc != -1){
    var val = parseInt(localStorage['latimes']) + parseInt(seconds);
    localStorage['latimes'] = val;
  }

  loc = site.indexOf('bbc.com');
  if(loc != -1){
    var val = parseInt(localStorage['bbc']) + parseInt(seconds);
    localStorage['bbc'] = val;
  }

  // SHOPPING
  loc = site.indexOf('amazon.com');
  if(loc != -1){
    var val = parseInt(localStorage['amazon']) + parseInt(seconds);
    localStorage['amazon'] = val;
  }

  loc = site.indexOf('ebay.com');
  if(loc != -1){
    var val = parseInt(localStorage['ebay']) + parseInt(seconds);
    localStorage['ebay'] = val;
  }

  loc = site.indexOf('gap.com');
  if(loc != -1){
    var val = parseInt(localStorage['gap']) + parseInt(seconds);
    localStorage['gap'] = val;
  }

  // ENTERTAINMENT JUNKIE 
  loc = site.indexOf('netflix.com');
  if(loc != -1){
    var val = parseInt(localStorage['netflix']) + parseInt(seconds);
    localStorage['netflix'] = val;
  }

  loc = site.indexOf('youtube.com');
  if(loc != -1){
    var val = parseInt(localStorage['youtube']) + parseInt(seconds);
    localStorage['youtube'] = val;
  }

  loc = site.indexOf('hulu.com');
  if(loc != -1){
    var val = parseInt(localStorage['hulu']) + parseInt(seconds);
    localStorage['hulu'] = val;
  }
  loc = site.indexOf('eonline.com');
  if(loc != -1){
  var val = parseInt(localStorage['eonline']) + parseInt(seconds);
  localStorage['eonline'] = val;
  }
  loc = site.indexOf('variety');
  if(loc != -1){
  var val = parseInt(localStorage['variety']) + parseInt(seconds);
  localStorage['variety'] = val;
  }

  // BUSINESS
  loc = site.indexOf('chase.com');
  if(loc != -1){
    var val = parseInt(localStorage['chase']) + parseInt(seconds);
    localStorage['chase'] = val;
  }

  loc = site.indexOf('linkedin.com');
  if(loc != -1){
    var val = parseInt(localStorage['linkedin']) + parseInt(seconds);
    localStorage['linkedin'] = val;
  }

  loc = site.indexOf('forbes.com');
  if(loc != -1){
    var val = parseInt(localStorage['forbes']) + parseInt(seconds);
    localStorage['forbes'] = val;
  }

  // INQUISITIVE
  loc = site.indexOf('google.com');
  if(loc != -1){
    var val = parseInt(localStorage['google']) + parseInt(seconds);
    localStorage['google'] = val;
  }

  loc = site.indexOf('yahoo.com');
  if(loc != -1){
    var val = parseInt(localStorage['yahoo']) + parseInt(seconds);
    localStorage['yahoo'] = val;
  }
  loc = site.indexOf('bing.com');
  if(loc != -1){
  var val = parseInt(localStorage['bing']) + parseInt(seconds);
  localStorage['bing'] = val;
  }
  loc = site.indexOf('ask.com');
  if(loc != -1){
  var val = parseInt(localStorage['ask']) + parseInt(seconds);
  localStorage['ask'] = val;
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
  if (localStorage['twitter'] == null){
    localStorage['twitter'] = 0;
  }
  if (localStorage['facebook'] == null){
    localStorage['facebook']=0;
  }
  if (localStorage['instagram'] == null){
    localStorage['instagram'] = 0;
  }
  if (localStorage['.edu'] == null){
    localStorage['.edu']=0;
  }
  if (localStorage['piazza'] == null){
    localStorage['piazza'] = 0;
  }
  if (localStorage['wikipedia'] == null){
    localStorage['wikipedia']=0;
  }
  if (localStorage['wsj'] == null){
    localStorage['wsj'] = 0;
  }
  if (localStorage['latimes'] == null){
    localStorage['latimes']=0;
  }
  if (localStorage['bbc'] == null){
    localStorage['bbc'] = 0;
  }
  if (localStorage['amazon'] == null){
    localStorage['amazon']=0;
  }
  if (localStorage['ebay'] == null){
    localStorage['ebay'] = 0;
  }
  if (localStorage['gap'] == null){
    localStorage['gap']=0;
  }
  if (localStorage['netflix'] == null){
    localStorage['netflix'] = 0;
  }
  if (localStorage['youtube'] == null){
    localStorage['youtube']=0;
  }
  if (localStorage['hulu'] == null){
    localStorage['hulu'] = 0;
  }
  if (localStorage['chase'] == null){
    localStorage['chase']=0;
  }
  if (localStorage['linkedin'] == null){
    localStorage['linkedin'] = 0;
  }
  if (localStorage['forbes'] == null){
    localStorage['forbes']=0;
  }
  if (localStorage['google'] == null){
    localStorage['google'] = 0;
  }
  if (localStorage['yahoo'] == null){
    localStorage['yahoo']=0;
  if (localStorage['bing'] == null){
  localStorage['bing']=0;
  }
  if (localStorage['ask'] == null){
  localStorage['ask']=0;
  }
  if (localStorage['eonline'] == null){
  localStorage['eonline'] = 0;
  }
  if (localStorage['variety'] == null){
  localStorage['variety'] = 0;
  }
}

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



/*Add this to popup.js
var b = localStorage['bing'];
var ask = localStorage['ask'];
var eon = localStorage['eonline'];
var v = localStorage['variety'];*/