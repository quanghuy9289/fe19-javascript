"use strict";
var $ = function(id) { return document.getElementById(id); };

// the event handler for the click event of each h2 element
var toggle = function() {
    var a = this; // clicked a tag 
    var h2 = a.parentNode; //Get the parent element of node a
    var div = h2.nextElementSibling; // h2 tag's sibling div tag

    // toggle plus and minus image in h2 elements by adding or removing a class
    if (h2.hasAttribute("class")) { //Returns the class attribute of the element
        h2.removeAttribute("class"); //Remove class attribute from element
    } else {
        h2.setAttribute("class", "minus"); //Add class="minus" attribute to element h2
    }

    // toggle div visibility by adding or removing a class
    if (div.hasAttribute("class")) {
        div.removeAttribute("class");
    } else {
        div.setAttribute("class", "open em");
    }
};

window.onload = function() {
    // get the a tags
    var faqs = $("faqs");
    var aElements = faqs.getElementsByTagName("a");

    // attach event handler for each a tag	    
    for (var i = 0; i < aElements.length; i++) {
        aElements[i].onclick = toggle;
    }
    // set focus on first h2 tag's <a> tag
    aElements[0].focus();
};