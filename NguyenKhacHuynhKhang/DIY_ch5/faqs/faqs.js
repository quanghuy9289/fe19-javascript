var $ = document.getElementById.bind(document);
function toggle () {
    var _this = this;
    var div = _this.nextElementSibling;
    if(_this.hasAttribute('class')) {
        _this.removeAttribute('class')
    } else {
        _this.setAttribute('class',  'minus')
    }
    if(div.hasAttribute('class')) {
        div.removeAttribute('class')
    } else {
        div.setAttribute('class', 'open')
    }
}
window.onload = function() {
    var faqs = $('faqs')
    var h2Elements = faqs.getElementsByTagName('h2');
    for(var i in h2Elements) {
        h2Elements[i].onclick = toggle;
    }
    h2Elements[0].firstChild.focus()
}