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
    if (futureValue == Infinity && i == years) {
      alert("Future value = " + futureValue +"\n"+ "i = " + i)
    }
  }
  futureValue = futureValue.toFixed(2);
  alert("The maximun value of a Javascript number is \n" + Number.MAX_VALUE);
return futureValue;
}

var formatFV = function(futureValue) {
  var dotLocaion = futureValue.indexOf(".");
  var cents = futureValue.substring(dotLocaion + 1, dotLocaion + 3);
  var hundreds = futureValue.substring(dotLocaion -3, dotLocaion);
  var thousands = "";
  var millions = "";

  if (dotLocaion < 6) {
    thousands = futureValue.substring(0, dotLocaion -3);
    millions = "";
  } else {
    thousands = futureValue.substring(dotLocaion - 6, dotLocaion -3);
    millions = futureValue.substring(0, dotLocaion -6);
  }

  var formattedFV = "";
  if (dotLocaion >= 7) {
    formattedFV = "$" + millions + "," + thousands + "," + hundreds + "," + cents;
  } else {
    formattedFV = "$" + thousands + "," + hundreds + "," + cents;
  }

  return formattedFV;
}

var processEntries = function() {
  // var investment = parseFloat( $("investment").value );
  // var rate = parseFloat( $("annual_rate").value );
  // var years = parseInt( $("years").value );

  var investment = getRandomNumber(50000);
  $("investment").value = investment;
  var rate = getRandomNumber(15);
  $("annual_rate").value = rate;
  var years = getRandomNumber(50);
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
    var futureValue	= calculateFV(investment,rate,years);
    $("future_value").value = formatFV(futureValue);
  }
}

var getDate = function () {
  var currentDate = new Date ();

  var month = currentDate.getMonth() + 1;
  var day = currentDate.getDate();
  var year = currentDate.getFullYear();  
  var hour = currentDate.getHours();
  var minute = currentDate.getMinutes();

  var dateString = "Today is ".concat(month, "/", day, "/", year, " at ", hour, ":", minute);

  return dateString;
}

window.onload = function() {
  $("calculate").onclick = processEntries;
  $("date").innerHTML = getDate();
  $("investment").focus();
}