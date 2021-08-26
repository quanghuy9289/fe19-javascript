"use strict";
var $ = function (id) {
  return document.getElementById(id);
};

var m, n;
var arr = [];

//Check validation when input m and n
var inputDimension = function () {
  m = parseFloat($("m").value);
  n = parseFloat($("n").value);

  if (Number.isInteger(m) && Number.isInteger(n) && m > 0 && n > 0) {
    $("dimension_error").innerHTML = "";
    $("showDimension").innerHTML = "Array has " + n + " rows and " + m + " columns";
    $("result").innerHTML = "Add 2 dimensions successfully";
  } else {
    $("dimension_error").innerHTML = "Two dimensions must be integers greater than 0";
    $("result").innerHTML = "";
  }
};

//Check if n, m don't exist, show notification for user when they input array
var checkDimensions = function () {
  if (isNaN(m) || isNaN(n)) {
    $("showDimension").innerHTML = "Array hasn't been had two dimensions n and m yet";
  }
};

//Check validation when input array
var showError = function () {
  $("arr_error").innerHTML = "Please enter an array with separator is ',' with above dimensions";
  $("result").innerHTML = "";
};

var createArray = function () {
  var contentArr = $("elements").value;
  arr = arr_tasks.newArray(contentArr, arr, showError);
  if (arr.length != 0) {
    $("dimension_error").innerHTML = "";
    $("result").innerHTML = "Create new Array with " + n + " rows and " + m + " columns successfully!";
  }
};

//Check empty array
var isArrayCreated = function () {
  var isCreated = arr.length != 0;
  if (!isCreated) {
    $("result").innerHTML = "No Array has been created yet.";
  }
  return isCreated;
};

//Print all element
var printAll = function () {
  if (!isArrayCreated()) {
    return;
  }
  var result = "Array with " + n + " row(s) and " + m + " column(s) :<br/>";
  result += arr_tasks.displayAll(arr);
  $("result").innerHTML = result;
};

//Calculate sum of all elements
var calculateSum = function () {
  if (!isArrayCreated()) {
    return;
  }
  $("result").innerHTML = "Sum of all elements in array is " + arr_tasks.sum(arr);
};

//Search a number in array
var searchNumber = function () {
  if (!isArrayCreated()) {
    return;
  }
  var value = parseFloat($("member").value);
  if (isNaN(value)) {
    $("search_error").innerHTML = "Enter a valid number, please";
    $("result").innerHTML = "";
  } else {
    $("search_error").innerHTML = "";
    $("result").innerHTML = arr_tasks.isExisted(arr, value)
      ? value + " exists in the array"
      : value + " does not exist in the array";
  }
};

//Sort by descending
var sortByDesc = function () {
  if (!isArrayCreated()) {
    return;
  }
  //Convert to 1-dimension array to sort
  arr_tasks.sortByDesc(arr);
  $("result").innerHTML = "Array is sorted by ascending";
};
