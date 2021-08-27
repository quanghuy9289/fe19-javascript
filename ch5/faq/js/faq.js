var $ = function (id) {
    return document.getElementById(id);
  };
  
var toggle = function(){
 
    var h2 = this;
    var div = h2.nextElementSibling;
 
    if(h2.hasAttribute("class")){
        h2.removeAttribute("class");
    } else {
        h2.setAttribute("class","active");
    }

    if(div.hasAttribute("class")){
        div.removeAttribute("class");
    } else {
        div.setAttribute("class", "open");
    }
 

}

window.onload = function(){
    var faq = $("faq");
    var h2element = faq.getElementsByTagName("h2");
    for(var i = 0; i < h2element.length; i++){
        h2element[i].onclick = toggle;
    }
    h2element[0].firstChild.focus();
}