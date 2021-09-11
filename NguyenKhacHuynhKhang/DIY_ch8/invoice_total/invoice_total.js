"use-strick";
var $ = document.getElementById.bind(document)
var calculateDiscountPercent = function (customerType, subtotalInvoice) {
  var discountPercent = 0;
  if (customerType === "r") {
    switch (true) {
      case (subtotalInvoice < 100):
        discountPercent = 0;
        break;
      case (subtotalInvoice >= 100 && subtotalInvoice < 250):
        discountPercent = 0.1;
        break;
      case (subtotalInvoice >= 250 && subtotalInvoice < 500):
        discountPercent = 0.25;
        break;
      case (subtotalInvoice >= 500):
        discountPercent = 0.3;
        break;
      default:
        break;
    }

  } else if (customerType === "l") {
    discountPercent = 0.3;
  } else if (customerType === "h") {
    if (subtotalInvoice < 500) {
      discountPercent = 0.4;
    } else {
      discountPercent = 0.5;
    }
  }
  return discountPercent;
};
var processEntries = function() {
    var customerType = $('type').value
    var invoiceSubtotal = parseFloat($('subtotal').value)
    $('subtotal').value = invoiceSubtotal.toFixed(2)
    var discountPercent = calculateDiscountPercent(customerType, invoiceSubtotal);
    console.log(discountPercent)
    var discountAmount = discountPercent * invoiceSubtotal;
    var invoiceTotal = invoiceSubtotal - discountAmount;
    $('percent').value = discountPercent * 100
    $('discount').value = discountPercent.toFixed(2);
    $('total').value = invoiceTotal.toFixed(2);
    $('type').focus()
}
window.onload = function () {
    $("calculate").onclick = processEntries;
    $("type").focus();
}
