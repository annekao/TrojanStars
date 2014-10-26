//These are temporary data for each user! Same order as categories array
	var userdata = [parseInt(localStorage['twitter']) + parseInt(localStorage['facebook']), 
					parseInt(academic), 
					parseInt(currentEvents), 
					parseInt(shopaholic ), 
					parseInt(entertainmentJunkie ), 
					parseInt(business), 
					parseInt(inquisitive) ];

	var categories = ["Social Butterfly", "Scholar", "Informed", "Shopaholic",
						"Entertainment Junkie", "Businessman", "Inquisitive"];
	
	var radarChartData = {
		labels: categories,
		datasets: [
			{
				label: "My First dataset",
				fillColor: "rgba(151,187,205,0.2)",
				strokeColor: "rgba(151,187,205,1)",
				pointColor: "rgba(151,187,205,1)",
				pointStrokeColor: "#fff",
				pointHighlightFill: "#fff",
				pointHighlightStroke: "rgba(151,187,205,1)",
				data: userdata
			}
		]
	};

	var barChartData = {
		labels : categories,
		datasets : [
			{
				fillColor : "rgba(200,150,250,0.5)",
				strokeColor : "rgba(200,205,205,0.8)",
				highlightFill : "rgba(151,187,205,0.75)",
				highlightStroke : "rgba(151,187,205,1)",
				data : userdata
			}
		]
	};

	var doughnutData = [
				{
					value: userdata[0],
					color:"#8B0000",
					highlight: "#DC143C",
					label: categories[0]
				},
				{
					value: userdata[1],
					color: "#FF8C00",
					highlight: "#E9967A",
					label: categories[1]
				},
				{
					value: userdata[2],
					color: "#DAA520",
					highlight: "#FFD700",
					label: categories[2]
				},
				{
					value: userdata[3],
					color: "#949FB1",
					highlight: "#FFFAFA",
					label: categories[3]
				},
				{
					value: userdata[4],
					color: "#008000",
					highlight: "#ADFF2F",
					label: categories[4]
				},
				{
					value: userdata[5],
					color: "#0000CD",
					highlight: "#66CDAA",
					label: categories[5]
				},
				{
					value: userdata[6],
					color: "#191970",
					highlight: "#87CEFA",
					label: categories[6]
				},

			];

	window.onload = function(){
		window.myRadar = new Chart(document.getElementById("canvas").getContext("2d")).Radar(radarChartData, {responsive: true});
		window.myBar = new Chart(document.getElementById("canvas2").getContext("2d")).Bar(barChartData, {responsive : true});
		window.myDoughnut = new Chart(document.getElementById("canvas3").getContext("2d")).Doughnut(doughnutData, {responsive : true});
	};

	//To add segments: canvas.onclick = function(evt){var active Points = myDoughnutChart.getSegmentsAtEvent(evt);};
