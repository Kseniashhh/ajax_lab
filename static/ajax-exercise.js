"use strict";


// PART 1: SHOW A FORTUNE

function showFortune() {

    // TODO: get the fortune and show it in the #fortune-text div

    $.get("/fortune",function (data){
    	$("#fortune-text").html(data);
    })


}

$('#get-fortune-button').on('click', showFortune);



// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};

    $.get(url, formData, showWeatherResults)

    // TODO: request weather with that URL and show the forecast in #weather-info
}

function showWeatherResults(result){
	console.dir(result);
	alert('The weather is ' + result['forecast']);
	alert('The temprature is ' + result['temp']);
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)

    let url = "/order-melons.json";
    let formData = {
    	"qty": $("#qty-field").val(),
    	"melon_type": $("#melon-type-field").val()
    };

   $.post(url, formData, showOrderStatus);
}


function showOrderStatus(result){
	console.dir(result);

	let status = result;
	$('#order-status').html(status['msg']);
	if (status['code'] === 'ERROR'){
		$('#order-status').html(status['msg']).addClass("order-error");
	};

	console.log('Finished');
}



$("#order-form").on('submit', orderMelons);


