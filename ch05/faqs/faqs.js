"use strict";
var $ = function(id) { return document.getElementById(id); };

// the event handler for the click event of each h2 element
var toggle = function() {
    var a = this;
    var h2 = a.parentNode;                    // clicked h2 tag     
    var div = h2.nextElementSibling;  // h2 tag's sibling div tag

    // toggle plus and minus image in h2 elements by adding or removing a class
    // if (h2.hasAttribute("class")) { 
    //     h2.removeAttribute("class");	
    // } else { 
    //     h2.setAttribute("class", "minus"); 
    // }
    if (h2.className == 0) {
        h2.className = "minus";
    } else if (h2.className = "minus") {
        h2.className = 0;
    }

    // toggle div visibility by adding or removing a class
    // if (div.hasAttribute("class")) { 
    //     div.removeAttribute("class");
    // } else { 
    //     div.setAttribute("class", "open"); 
    // } 
    if (div.className == 0) {
        div.className = "open";
    } else if (div.className = "open") {
        div.className = " ";
    }
};

window.onload = function() {
    // get the h2 tags
    var faqs = $("faqs");
    var aElement = faqs.getElementsByTagName("a");
    
    // attach event handler for each h2 tag	    
    for (var i = 0; i < aElement.length; i++ ) {
    	aElement[i].onclick = toggle;
    }
    // set focus on first h2 tag's <a> tag
    aElement[0].firstChild.focus();       
};
