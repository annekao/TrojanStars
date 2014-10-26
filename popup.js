document.addEventListener('DOMContentLoaded', function () { 
    var sites = JSON.stringify(localStorage.sites);
    console.log(sites);

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


	// for(int i = 0; i++; i < sites.length){
	// 	document.getElementById("stats").append(".");
	// }
	document.getElementById("stats").innerHTML = 
		"TWTR: " + t + "     " + 
		"FB: " + f + "     " + 
		"INSTA: " + i + "     " + 
		"EDU: " + edu + "     " + 
		"PIAZ: " + p + "     " +
		"WIKI: " + w + "     " + 
		"WSJ: " + wsj + "     " + 
		"LAT: " + lat + "     " + 
		"BBC: " + bbc + "     " +
		"AMAZ: " + a + "     " + 
		"EBAY: " + e + "     " + 
		"GAP: " + g + "     " + 
		"NF: " + n + "     " + 
		"YT: " + y + "     " + 
		"HULU: " + h + "     " + 
		"CHS: " + c + "     " + 
		"LINKD: " + l + "     " + 
		"FORB: " + forb + "     " + 
		"GOOG: " + goog + "     " + 
		"YHOO: " + yah + "     " ;


});
g