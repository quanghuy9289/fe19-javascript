var $ = function(id) {
    return document.getElementById(id);
}
var getRandomNumber = function(max) {
    var random;
    if (!isNaN(max)) {
        // random = Math.random(); //value >= 0.0 and < 1.0
        random = Math.floor(Math.random() * max) + 1; //value is an integer between 0 and max - 1
        // random = random + 1; //value is an integer between 1 and max
    }
    return random;
}

var calculateFV = function(investment, rate, years) {
    var futureValue = investment;
    for (var i = 1; i <= years; i++) {
        futureValue += futureValue * rate / 100;
        if (futureValue == Infinity || i == 5342) {
            alert("The input value doesn't seem to be in reality!");
            i = years;
        }
    }
    alert("The maximum value for a JavaScript number is \n" + Number.MAX_VALUE);
    futureValue = futureValue.toFixed(2);
    return futureValue;
}

var processEntries = function() {
    var investment = parseInt($("investment").value);
    var rate = parseFloat($("annual_rate").value);
    var years = parseInt($("years").value);
    var investment = getRandomNumber(50000);
    $("investment").value = investment;
    var rate = getRandomNumber(15);
    $("annual_rate").value = rate;
    var years = getRandomNumber(50);
    $("years").value = years;

    $("future_value").value = calculateFV(investment, rate, years);

    // if (isNaN(investment) || investment <= 0) {
    //     alert("Must be > 0");
    // } else if (isNaN(rate) || rate <= 0) {
    //     alert("Must be > 0");
    // } else if (isNaN(years) || years <= 0) {
    //     alert("Must be > 0");
    //     allValid = false;
    // } else {
    //     $("future_value").value = calculateFV(investment, rate, years);
    // }
}

var getDate = function() {
    var currentDate = new Date();
    // Get the date parts
    var month = currentDate.getMonth() + 1;
    month = (month < 10) ? "0" + month : month;
    var day = currentDate.getDate();
    day = (day < 10) ? "0" + day : day;
    var year = currentDate.getFullYear();
    var dateString = "Today is " + month + "/" + day + "/" + year + " at ";
    // Get the time parts
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    minutes = (minutes < 10) ? "0" + minutes : minutes; // Pad minutes
    var dateString = "Today is " + month + "/" + day + "/" + year;
    dateString += " at " + hours + ":" + minutes + ".";
    return dateString;
}

var formatFV = function(futureValue) {
    var dotLocation = futureValue.indexOf(".");
    var cents = futureValue.substring(dotLocation + 1, dotLocation + 3);
    var hundreds = futureValue.substring(dotLocation - 3, dotLocation);
    var thousands = "";
    var millions = "";
    if (dotLocation < 6) {
        thousands = futureValue.substring(0, dotLocation - 3);
        millions = "";
    } else {
        thousands = futureValue.substring(dotLocation - 6, dotLocation - 3);
        millions = futureValue.substring(0, dotLocation - 6);
    }
    var futureValueFormatted = "";
    if (dotLocation >= 7) {
        futureValueFormatted = "$" + millions + "," + thousands + "," + hundreds + "." + cents;
    } else {
        futureValueFormatted = "$" + thousands + "," + hundreds + "." + cents;
    }
    return futureValueFormatted;
}

window.onload = function() {
    $("date").firstChild.nodeValue = getDate();
    $("calculate").onclick = processEntries;
    $("investment").focus();
}