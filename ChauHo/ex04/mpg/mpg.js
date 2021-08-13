"use strict";
const query = function (id) {
  return document.getElementById(id);
};
const calculateMpg = function (miles, gallons) {
  const mpg = miles / gallons;
  return mpg.toFixed(1);
};
function processEntries() {
  const miles = parseFloat(query("miles").value);
  const gallons = parseFloat(query("gallons").value);

  if (miles <= 0) {
    query("miles_error").firstChild.nodeValue = "Must greater than 0.";
  } else if (gallons <= 0) {
    query("gallons_error").firstChild.nodeValue = "Must greater than 0.";
    query("miles_error").firstChild.nodeValue = ``;
  } else if (isNaN(miles)) {
    query("miles_error").firstChild.nodeValue = "Must be a number.";
    query("gallons_error").firstChild.nodeValue = ``;
  } else if (isNaN(gallons)) {
    query("gallons_error").firstChild.nodeValue = "Must be a number.";
    query("miles_error").firstChild.nodeValue = ``;
  } else {
    query("miles_error").firstChild.nodeValue = ``;
    query("gallons_error").firstChild.nodeValue = ``;
    query("mpg").value = calculateMpg(miles, gallons);
  }
}

const clearEntries = function () {
  query("miles").value = null;
  query("gallons").value = null;
  query("mpg").value = null;
};

// window.onload = function () {
//   query("calculate").onclick = processEntries;
//   query("miles").focus();
// };

query("calculate").addEventListener("click", processEntries);
query("clear").addEventListener("click", clearEntries);
query("miles").addEventListener("dblclick", clearEntries);
