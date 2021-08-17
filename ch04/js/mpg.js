"use strict";

function $(id) {
  return document.getElementById(id);
}

var processEntry = function () {
  var miles = parseFloat($("miles").value);
  var gallons = parseFloat($("gallons").value);

  // check values
  if (isNaN(miles) || isNaN(gallons) || miles <= 0 || gallons <= 0) {
    if (isNaN(miles)) {
      $("miles_error").firstChild.nodeValue = "Miles must be numeric.";
    } else if (miles <= 0) {
      $("miles_error").firstChild.nodeValue = "Miles must be greater than 0.";
    } else if (isNaN(gallons)) {
      $("gallons_error").firstChild.nodeValue = "Gallons must be numeric.";
    } else if (gallons <= 0) {
      $("gallons_error").firstChild.nodeValue = "Gallons must be greater than 0.";
    } 
  } else {
    $("miles_error").firstChild.nodeValue = "";
    $("gallons_error").firstChild.nodeValue = "";
    $("mpg_result").value = calculateMpg(miles, gallons);
    }
}

// calculate
function calculateMpg(miles, gallons) {
  var mpg = (miles / gallons);
  mpg = mpg.toFixed(1);
  return mpg;
};

// clearEntries
function clearEntries() {
  $("miles").value = "";
  $("gallons").value = "";
  $("mpg_result").value = "";
  $("miles_error").firstChild.nodeValue = "*";
  $("gallons_error").firstChild.nodeValue = "*";
};


window.onload = function () {
  $("calculate").onclick = processEntry;
  $("clear_entries").onclick = clearEntries;
  $("miles").focus();
  $("miles").ondblclick = clearEntries;
};
