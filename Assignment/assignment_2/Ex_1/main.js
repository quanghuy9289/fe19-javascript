"use strict";

var $ = function(id) {
    return document.getElementById(id);
};

var listArray = [1, 9, 22, 56, 99, 100, 4, 5, 21, 5];
// var listArray = new Array(10);
// for (var i = 0; i <= 10; i++) {
//     listArray[i] = parseInt(prompt("Enter the element of the array:"));
// };
function printArray() {
    $("screen").innerHTML = ("Array element list: " + listArray + "<br>");
};

const findArray = function() {
    var name = parseInt(prompt("Enter the element you want to find:"))
    if (isNaN(name) || name < 0) {
        alert("Enter the element as an integer!");
    } else if (listArray.includes(name) == false) {
        $("member").innerHTML = (name + " Not in array" + "<br>");
    } else {
        $("member").innerHTML = (name + " is the element of the array" + "<br>");
    }
};

const maxArray = function() {
    let max = Math.max.apply(Math, listArray);
    let min = Math.min.apply(Math, listArray);
    $("maximum").innerHTML = ("The largest element of the array: " + max + "<br>");
    // $("minimum").innerHTML = ("The smallest element of the array " + min + "<br>");
};

const totalArray = function() {
    let total = 0;
    for (let i = 0; i < listArray.length; i++) {
        total += listArray[i];
    }
    $("total").innerHTML = ("Total: " + total);
};

const bubbleSort = function() {
    var size = listArray.length;
    // run loops two times: one for walking throught the array
    // and the other for comparison
    for (var i = 0; i < size - 1; i++) {
        for (var j = 0; j < size - i - 1; j++) {
            if (listArray[j] < listArray[j + 1]) {
                var temp = listArray[j];
                listArray[j] = listArray[j + 1];
                listArray[j + 1] = temp;
            }
        }
    }
    $("bubblesort").innerHTML = ("Sorted array: " + listArray);
}

window.onload = function() {
    $("print").onclick = printArray;
    $("search").onclick = findArray;
    $("max").onclick = maxArray;
    $("calculate").onclick = totalArray;
    $("sort").onclick = bubbleSort;
}