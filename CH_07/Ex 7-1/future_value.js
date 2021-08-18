"use strict";
var $ = function (id) {
  return document.getElementById(id);
};
var getRandomNumber = function (max) {
  var random;
  if (!isNaN(max)) {
    random = Math.random(); //value >= 0.0 and < 1.0
    random = Math.floor(random * max); //value is an integer between 0 and max - 1
    random = random + 1; //value is an integer between 1 and max
  }
  return random;
};
var calculateFV = function (investment, rate, years) {
  var futureValue = investment;
  for (var i = 1; i <= years; i++) {
    futureValue += (futureValue * rate) / 100;
    if (futureValue == Infinity) {
      alert("Future value = " + futureValue + "\ni = " + i);
      break;
    }
  }
  // alert("The maximum value of a number is " + Number.MAX_VALUE);
  futureValue = futureValue.toFixed(2);
  return futureValue;
};
var processEntries = function () {
  //   var investment = parseFloat($("investment").value);
  //   var rate = parseFloat($("annual_rate").value);
  //   var years = parseInt($("years").value);

  var investment = getRandomNumber(50000);
  var rate = getRandomNumber(15);
  var years = getRandomNumber(50);

  $("investment").value = investment;
  $("annual_rate").value = rate;
  $("years").value = years;

  if (isNaN(investment) || investment <= 0) {
    alert("Must be > 0");
  } else if (isNaN(rate) || rate <= 0) {
    alert("Must be > 0");
  } else if (isNaN(years) || years <= 0) {
    alert("Must be > 0");
    allValid = false;
  } else {
    $("future_value").value = formatFV(calculateFV(investment, rate, years));
  }
};

var formatFV = function (futureValue) {
  var decimalPoint = futureValue.indexOf(".");
  var decimal = "";
  var integer = futureValue;

  if (decimalPoint != -1) {
    decimal = futureValue.slice(decimalPoint);
    integer = futureValue.slice(0, decimalPoint);
  }

  var formattedNumber = "";
  var len = integer.length;

  //Max of Future Value is 54182872.08 when calculated from max investment (50000), rate(15), number of years(50)
  //I'll assume that Future Value has billon digits
  if (len <= 3) {
    formattedNumber = "$" + futureValue;
  } else if (len < 7) {
    formattedNumber = "$" + integer.slice(0, -3) + "," + integer.slice(-3) + decimal;
  } else if (len < 10) {
    formattedNumber = "$" + integer.slice(0, -6) + "," + integer.slice(-6, -3) + "," + integer.slice(-3) + decimal;
  } else {
    formattedNumber =
      "$" +
      integer.slice(0, -9) +
      "," +
      integer.slice(-9, -6) +
      "," +
      integer.slice(-6, -3) +
      "," +
      integer.slice(-3) +
      decimal;
  }

  return formattedNumber;
};

var getDate = function () {
  var today = new Date();

  var formatDate = "Today is ".concat(
    today.getDate(),
    "/",
    today.getMonth() + 1,
    "/",
    today.getFullYear(),
    " at ",
    today.getHours(),
    ":",
    today.getMinutes()
  );

  return formatDate;
};
window.onload = function () {
  $("date").innerHTML = getDate();
  $("calculate").onclick = processEntries;
  $("investment").focus();
};
