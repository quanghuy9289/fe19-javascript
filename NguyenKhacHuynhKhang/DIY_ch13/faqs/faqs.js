"use strict";
var $ = function(id) { return document.getElementById(id); };

var toggle = function() {
    var h2 = this;                       
    var div = h2.nextElementSibling;  
 
    // toggle plus/minus image 
    if (h2.hasAttribute('class')) { h2.removeAttribute('class');       
    } else { h2.setAttribute('class', 'minus'); }
 
    if (div.hasAttribute('class')) { div.removeAttribute('class');
    } else { div.setAttribute('class', 'open'); } 
};

var log = function(e) { 
    console.log( e ); 
};
 
window.onload = function() {
    // get the h2 tags
    var faqs = $("faqs");
    var elements = faqs.getElementsByTagName('h2');
    
    for (var i = 0; i < elements.length; i++) {
        var h2 = elements[i];  
        var a = h2.firstChild; 
		
        evt.attach(h2, "click", toggle);
		
		
        evt.attach(a, "click", log);
        evt.attach(a, "focus", log);
        evt.attach(a, "mouseover", log);
    }
    elements[0].firstChild.focus();       
};