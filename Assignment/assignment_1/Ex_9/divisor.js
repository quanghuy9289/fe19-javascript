"use strict";

var $ = function(id) {
    return document.getElementById(id);
};

var commonDivisor = function(a, b) {
    // Using Euclidean Algorithm
    if (b == 0) {
        return a;
    }
    return commonDivisor(b, a % b);

    //Use remainder division
    /*while (a * b != 0) {
        if (a > b) {
            a %= b; // a = a % b
        } else {
            b %= a;
        }
    }
    return a + b;*/

    //Using subtraction
    /*if (a == 0 || b == 0){
        return a + b;
    }
    while (a != b){
        if (a > b){
            a -= b; // a = a - b
        }else{
            b -= a;
        }
    }
    return a;*/
};

var printDivisor = function() {
    var a = parseFloat($("number_a").value);
    var b = parseFloat($("number_b").value);

    if (isNaN(a) || isNaN(b) || a < 0 || b < 0) {
        $("divisor").value = "";
        alert("Please enter both a and b as integers and greater than 0!");
    } else {
        $("divisor").value = commonDivisor(a, b);
    }
};

onload = function() {
    $("submit").onclick = printDivisor;
    $("number_a").focus();
};