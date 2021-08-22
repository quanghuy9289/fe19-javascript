var $ = function(id) {
    return document.getElementById(id);
}
var getRandomNumber = function(max) {
    var random;
    if (!isNaN(max)) {
        random = Math.random(); //value >= 0.0 and < 1.0
        random = Math.floor(random * max); //value is an integer between 0 and max - 1
        random = random + 1; //value is an integer between 1 and max
    }
    return random;
}
var calculateFV = function(investment,rate,years) {
	var futureValue = investment;
    for (var i = 1; i <= years; i++ ) {
		futureValue += futureValue * rate / 100;
        if ( futureValue == Infinity ) {
			alert ("Future Value = " + futureValue + "\n i = " + i);
			i = years;
		}
    }
    // alert ("The maximum value for a JavaScript number is \n" + Number.MAX_VALUE);
    futureValue = futureValue.toFixed(2);
	return futureValue;
}
var processEntries = function() {
    // var investment = parseFloat( $("investment").value );
    // var rate = parseFloat( $("annual_rate").value );
    // var years = parseInt( $("years").value );

	var investment = getRandomNumber(50000);
	var rate = getRandomNumber(15);
  	var years = getRandomNumber(50);
	var futureValue;

 	$("investment").value = investment;
 	$("annual_rate").value = rate;
  	$("years").value = years;

	if (isNaN(investment) || investment <= 0) {
		alert("Must be > 0");
	}
	else if (isNaN(rate) || rate <= 0) {
		alert("Must be > 0");
	}
	else if (isNaN(years) || years <= 0) {
		alert("Must be > 0");
		allValid = false;
	}
	else {
		futureValue	= calculateFV(investment,rate,years);
		$("future_value").value	= formatFV(futureValue);
	}
}

var formatFV = function(futureValue) {
	var point = futureValue.indexOf(".");
	var cents = futureValue.substring(point + 1, point + 3);
	var hundreds = futureValue.substring(point - 3, point);
	var thousands = "";
	var millions = "";
	if (point < 6) {
		thousands = futureValue.substring(0, point - 3);
		millions = "";
	}
	else {
		thousands = futureValue.substring(point - 6, point - 3);
		millions = futureValue.substring(0, point - 6);
	}
	var formatted = "";
	if (point >= 7) {
		formatted = "$" + millions + "," + thousands + "," + hundreds + "." + cents;
	}
	else {
		formatted = "$" + thousands + "," + hundreds + "." + cents;
	}
	return formatted;
}

var getDate = function (){
	var today = new Date();

	var dateString = "Today is " 
	+ today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear()
	+ " at " + today.getHours() + ":" + today.getMinutes() + ".";
	return dateString;
}

window.onload = function() {
    $("calculate").onclick = processEntries;
    $("investment").focus();
	$("date").firstChild.nodeValue = getDate();
}