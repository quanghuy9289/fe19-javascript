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

var log = function(e){
    console.log(e);
}

window.onload = function(){
    var faq = $("faq");
    var h2element = faq.getElementsByTagName("h2");

    //attach event handlers
    for(var i = 0; i < h2element.length; i++){
        var h2 =   h2element[i];
        var a = h2.firstChild;

        //attach h2 click event
        evt.attach(h2, "click", toggle);
        
        //cancel the default action of the a tag
        evt.attach(a, "click", evt.preventDefault);
        //log various event out of the a tag
        evt.attach(a, "click", log);
        evt.attach(a, "focus", log);
        evt.attach(a, "mouseover", log);
         
    }
    h2element[0].firstChild.focus();
}