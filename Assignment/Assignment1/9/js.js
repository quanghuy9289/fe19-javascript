

var USCLN;

var a = prompt('Nhap vào số a = ');
a = parseFloat(a);
var b = prompt('Nhập vào số b = ');
b = parseFloat(b);

if (a>=0 && b>=0) {
    if (a==0 && b==0) {
        alert('Không tồn tại USCLN');
    } else if(a==0 || b==0) {
        USCLN = (a == 0) ? b : a;
        alert('USCLN = ' + USCLN) ;
    } else {

        while(a != b) {
            if (a > b) {
                a = a - b;
            } else {
                b = b - a;
            }
        }      
        USCLN = a;        
        alert('USCLN = ' + USCLN);
    }
} else {
    alert('Vui lòng nhập lại: a, b > 0');
}

