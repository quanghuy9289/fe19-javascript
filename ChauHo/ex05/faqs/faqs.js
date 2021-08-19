"use strict";
const query = function (id) {
  return document.getElementById(id);
};

const faqs = query("faqs");
const h2Elements = faqs.getElementsByTagName("h2");
const hrefElements = faqs.getElementsByTagName("a");

const toggle = function () {
  const href = this; // clicked a tag
  const div = href.parentNode.nextElementSibling; // h2 tag's sibling div tag

  // toggle plus and minus image in h2 elements by adding or removing a class
  // if (href.hasAttribute("class")) {
  //   href.removeAttribute("class");
  // } else {
  //   href.setAttribute("class", "minus");
  // }

  if (href.hasAttribute("class")) href.setAttribute("class", "");
  else href.setAttribute("class", "minus");

  // if (div.hasAttribute("class")) {
  //   div.removeAttribute("class");
  // } else {
  //   div.setAttribute("class", "open");
  // }
  if (div.hasAttribute("class")) div.setAttribute("class", "");
  else div.setAttribute("class", "open");
  // toggle div visibility by adding or removing a class
};

window.onload = function () {
  // get the h2 tags

  // attach event handler for each h2 tag
  for (let i = 0; i < hrefElements.length; i++) {
    hrefElements[i].onclick = toggle;
  }
  // set focus on first h2 tag's <a> tag
  h2Elements[0].firstChild.focus();
};
