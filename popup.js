
document.addEventListener('DOMContentLoaded', function () { 
    var sites = JSON.stringify(localStorage.sites);
    

    var t = localStorage['twitter'];
    var f = localStorage['facebook'];
    var i = localStorage['instagram'];
    var edu = localStorage['.edu'];
    var p = localStorage['piazza'];
    var w = localStorage['wikipedia'];
    var wsj = localStorage['wsj'];
    var lat = localStorage['latimes'];
    var bbc = localStorage['bbc'];
    var a = localStorage['amazon'];
    var e = localStorage['ebay'];
    var g = localStorage['gap'];
    var n = localStorage['netflix'];
    var y = localStorage['youtube'];
    var h = localStorage['hulu'];
    var c = localStorage['chase'];
    var l = localStorage['linkedin'];
    var forb = localStorage['forbes'];
    var goog = localStorage['google'];
    var yah = localStorage['yahoo'];

    socialButterfly = parseInt(t) + parseInt(f) + parseInt(i);
    academic = parseInt(edu) + parseInt(p) + parseInt(w);
    currentEvents = parseInt(wsj) + parseInt(lat) + parseInt(bbc);
    shopaholic = parseInt(a) + parseInt(e) + parseInt(g);
    entertainmentJunkie = parseInt(n) + parseInt(y) + parseInt(h);
    business = parseInt(c) + parseInt(l) + parseInt(forb);
    inquisitive = parseInt(goog) + parseInt(yah);


	// for(int i = 0; i++; i < sites.length){
	// 	document.getElementById("stats").append(".");
	// }
	/*document.getElementById("stats").innerHTML = 
		"TWTR: " + t + "<br>" + 
		"FB: " + f + "<br>" + 
		"INSTA: " + i + "<br>" + 
		"EDU: " + edu + "<br>" + 
		"PIAZ: " + p + "<br>" +
		"WIKI: " + w + "<br>" + 
		"WSJ: " + wsj + "<br>" + 
		"LAT: " + lat + "<br>" + 
		"BBC: " + bbc + "<br>" +
		"AMAZ: " + a + "<br>" + 
		"EBAY: " + e + "<br>" + 
		"GAP: " + g + "<br>" + 
		"NF: " + n + "<br>" + 
		"YT: " + y + "<br>" + 
		"HULU: " + h + "<br>" + 
		"CHS: " + c + "<br>" + 
		"LINKD: " + l + "<br>" + 
		"FORB: " + forb + "<br>" + 
		"GOOG: " + goog + "<br>" + 
		"YHOO: " + yah + "<br>" ;*/


});


