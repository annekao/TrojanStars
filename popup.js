document.addEventListener('DOMContentLoaded', function () { 
    var sites = JSON.stringify(localStorage.sites);
    console.log(sites);
    var t = localStorage['twitter'];
    var f = localStorage['facebook'];

	// for(int i = 0; i++; i < sites.length){
	// 	document.getElementById("stats").append(".");
	// }
	document.getElementById("stats").innerHTML = "T: " + t + "   F: " + f;
});
