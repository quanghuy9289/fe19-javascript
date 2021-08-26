"use strict";

var $ = function (id) {
  return document.getElementById(id);
};
arrayTask.arr = [10, -43, 23, 0, 2, 32, 101, 27, -73, 58];

//Print all elements
var func1 = function () {
  $("result").innerHTML = "Array: " + arrayTask.printAll();
};

//Search a number in array
var func2 = function () {
  var member = parseFloat($("member").value);
  if (isNaN(member)) {
    $("error").innerHTML = "Please enter a valid number";
    $("result").innerHTML = "";
    return;
  }
  $("error").innerHTML = "";

  if (arrayTask.isExisted(member)) {
    $("result").innerHTML = member + " exists in the array";
  } else {
    $("result").innerHTML = member + " does not exist in the array";
  }
};

//Find max number
var func3 = function () {
  $("result").innerHTML = "The maximum number is " + arrayTask.findMax();
};

//Calculate sum of all elements
var func4 = function () {
  $("result").innerHTML = "The sum of all elements in the array is " + arrayTask.sum();
};

//Sort by Descending
var func5 = function () {
  arrayTask.sortByDesc();
  $("result").innerHTML = "The array after sorted by descending is: <br/>" + arrayTask.printAll();
};

onload = function () {
  document.addEventListener("keydown", function (event) {
    if (event.key === "1") {
      $("function1").click();
    } else if (event.key === "2") {
      $("function2").click();
    } else if (event.key === "3") {
      $("function3").click();
    } else if (event.key === "4") {
      $("function4").click();
    } else if (event.key === "5") {
      $("function5").click();
    }
  });
};
