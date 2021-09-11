"use strict";

var $ = function(id) {
    return document.getElementById(id);
};


var arr = [];
var rows = prompt("Enter rows value: ");
var columns = prompt("Enter columns value: ");

if (!isNaN(rows) && !isNaN(columns) && rows % 1 === 0 && columns % 1 === 0) {
    rows = parseInt(rows);
    columns = parseInt(columns);
    for (var i = 0; i < rows; i++) {
        arr[i] = [];
        for (var j = 0; j < columns; j++) {
            var value = prompt("Enter value at row [" + i + "] column [" + j + "]");
            if (!isNaN(value) && parseInt(value) % 1 === 0) {
                arr[i][j] = parseInt(value);
            } else {
                alert("Invalid number");
                j--;
            }
        }
    }
};

var printScreen = function() {
    var result = "";
    for (let x = 0; x < arr.length; x++) {
        if (arr[x]) {
            result += arr[x] + "<br>";
        }
        $("screen").innerHTML = result;
    }
}

const searchArray = function() {
    var findValue = prompt("Enter a value you want to search in array");
    findValue = parseInt(findValue);
    var findX = true;
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < columns; j++) {
            if (arr[i][j] === findValue) {
                findX = true;
                break;
            } else {
                findX = false;
            }
        }
        if (findX === true) break;
    }
    $("member").innerHTML = (findX === true) ? findValue + " is the element of the array" : findValue + " Not in array" + "<br>";
};


const totalArray = function() {
    var total = 0;
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < columns; j++) {
            total += arr[i][j];
        }
    }
    $("total").innerHTML = "Total of array value is: " + total;
};

var sortArr = function() {
    $("sort_arr").innerHTML = "";
    localStorage.setItem("array", arr);
    var sortArr = function(x, y) {
        return x - y;
    }
    var arrSort = [];
    var sortStr = localStorage.getItem("array").split(",").sort(sortArr);
    var k = 0;
    for (var i = 0; i < rows; i++) {
        arrSort[i] = [];
        for (var j = 0; j < columns; j++) {
            arrSort[i][j] = sortStr[k];
            k++;
        }
        $("sort_arr").innerHTML += arrSort[i].join("&nbsp;&nbsp") + "\n\n";
    }
};


window.onload = function() {
    $("print").onclick = printScreen;
    $("search").onclick = searchArray;
    $("calculate").onclick = totalArray;
    $("sort").onclick = sortArr;
}