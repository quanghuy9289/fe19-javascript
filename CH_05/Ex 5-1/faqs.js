"use strict";
var $ = function (id) {
  return document.getElementById(id);
};

var toggle = function () {
  var a = this;
  var h2 = a.parentNode;
  var div = h2.nextElementSibling;

  /*toggle between minus and plus sign
  if (h2.hasAttribute("class")) {
    h2.removeAttribute("class");
  } else {
    h2.setAttribute("class", "minus");
  } */
  if (h2.className == "") {
    h2.className = "minus";
  } else if (h2.className == "minus") {
    h2.className = "";
  }

  /* hide and show content
  if (div.hasAttribute("class")) {
    div.removeAttribute("class");
  } else {
    div.setAttribute("class", "open");
  } */
  if (div.className == "") {
    div.className = "open";
  } else if (div.className == "open") {
    div.className = "";
  }
};

onload = function () {
  var faqs = $("faqs");
  var aElements = faqs.getElementsByTagName("a");

  for (var i = 0; i < aElements.length; i++) {
    aElements[i].onclick = toggle;
  }

  aElements[0].focus();
};
