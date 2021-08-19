"use strict";
const query = function (id) {
  return document.getElementById(id);
};

const calculateDiscountPercent = function (customerType, invoiceSubtotal) {
  let discountPercent = 0;
  switch (customerType) {
    case "r":
      if (invoiceSubtotal < 100) {
        discountPercent = 0.1;
      } else if (invoiceSubtotal >= 100 && invoiceSubtotal < 250) {
        discountPercent = 0.2;
      } else if (invoiceSubtotal >= 250 && invoiceSubtotal < 500) {
        discountPercent = 0.25;
      } else if (invoiceSubtotal >= 500 && invoiceSubtotal < 1000) {
        discountPercent = 0.3;
      } else if (invoiceSubtotal >= 1000) discountPercent = 0.4;
      break;
    case "l":
      discountPercent = 0.3;
      break;
    case "h":
      if (invoiceSubtotal < 500) {
        discountPercent = 0.4;
      } else if (invoiceSubtotal >= 500) {
        discountPercent = 0.5;
      }
      break;
    case "e":
      discountPercent = 0.5;
    default:
      break;
  }
  //   if (customerType === "r") {
  //     if (invoiceSubtotal < 100) {
  //       discountPercent = 0.1;
  //     } else if (invoiceSubtotal >= 100 && invoiceSubtotal < 250) {
  //       discountPercent = 0.2;
  //     } else if (invoiceSubtotal >= 250 && invoiceSubtotal < 500) {
  //       discountPercent = 0.25;
  //     } else if (invoiceSubtotal >= 500 && invoiceSubtotal < 1000) {
  //       discountPercent = 0.3;
  //     } else if (invoiceSubtotal >= 1000) discountPercent = 0.4;
  //   } else if (customerType === "l") {
  //     discountPercent = 0.3;
  //   } else if (customerType === "h") {
  //     if (invoiceSubtotal < 500) {
  //       discountPercent = 0.4;
  //     } else if (invoiceSubtotal >= 500) {
  //       discountPercent = 0.5;
  //     }
  //   } else if (customerType === "e") discountPercent = 0.5;
  return discountPercent;
};

const processEntries = function () {
  let discountAmount, invoiceTotal, discountPercent;

  //get values from page, reset subtotal to 2 decimals
  const customerType = query("type").value;
  const invoiceSubtotal = parseFloat(query("subtotal").value);

  if (!isNaN(invoiceSubtotal && invoiceSubtotal > 0)) {
    query("subtotal").value = invoiceSubtotal.toFixed(2);

    //call function to get discount percent
    discountPercent = calculateDiscountPercent(customerType, invoiceSubtotal);

    //calculate and display discount percent, amount, and new total
    discountAmount = invoiceSubtotal * discountPercent;
    invoiceTotal = invoiceSubtotal - discountAmount;

    query("percent").value = (discountPercent * 100).toFixed(2);
    query("discount").value = discountAmount.toFixed(2);
    query("total").value = invoiceTotal.toFixed(2);

    query("type").focus;
  } else alert("Please enter the valid value!");
};

window.onload = function () {
  query("calculate").onclick = processEntries;
  query("type").focus();
};
