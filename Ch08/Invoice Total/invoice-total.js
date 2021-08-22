"use strict";
var $ = function(id) {
    return document.getElementById(id);
}
var calculateDiscountPercent = function(customerType, invoiceSubtotal) {
    var discountPercent = 0;
    switch (customerType) {
        case "r": {
            if (invoiceSubtotal < 100) discountPercent = .1
            else if (invoiceSubtotal < 250) discountPercent = .2
            else if (invoiceSubtotal < 500) discountPercent = .25
            else if (invoiceSubtotal < 1000) discountPercent = .3
            else discountPercent = .4
            break;
        }
        case "l": {
            discountPercent = .3
            break;
        }
        case "h": {
            if (invoiceSubtotal < 500) discountPercent = .4
            else discountPercent = .5
            break;
        }
        case "e": {
            discountPercent = .5;
            break;
        }
    }
    return discountPercent;
}
var processEntries = function() {
    var discountAmount;
    var invoiceTotal;
    var discountPercent;
    var customerType = $("type").value;
    var invoiceSubtotal = parseFloat($("invoice").value);
    invoiceSubtotal = invoiceSubtotal.toFixed(2);
    discountPercent = calculateDiscountPercent(customerType, invoiceSubtotal);
    discountAmount = discountPercent * invoiceSubtotal;
    invoiceTotal = invoiceSubtotal - discountAmount;
    $("discount-percent").value = discountPercent.toFixed(2);
    $("discount-amount").value = discountAmount.toFixed(2);
    $("invoice-total").value = invoiceTotal.toFixed(2);
}
window.onload = function() {
    $("type").focus;
    $("calculate").onclick = processEntries;
}