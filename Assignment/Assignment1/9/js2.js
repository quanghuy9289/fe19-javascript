var $ = function(id) {
    return document.getElementById(id);
};

var USCLN;

var processEntries = function() {
    var a = $('A').value;
    a = parseInt(a);
    var b = $('B').value;
    b = parseInt(b);
    $('span').firstChild.nodeValue = calculate(a,b);
}

var calculate = function (a,b) {
if (a>=0 && b>=0) {
    if (a==0 && b==0) {
        return 'Không tồn tại USCLN';
    } else if(a==0 || b==0) {
        USCLN = (a == 0) ? b : a;
        return 'USCLN = ' + USCLN ;
    } else {
        while(a != b) {
            if (a > b) {
                a = a - b;
            } else {
                b = b - a;
            }
        }      
        USCLN = a;        
        return 'USCLN = ' + USCLN;
    }
} else {
    return ('Vui lòng nhập lại: a, b > 0');
}
}

window.onload = function () {
    $('calculate').onclick = processEntries;
    $('A').focus();
}
