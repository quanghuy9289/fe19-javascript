var n, m;
var array;
var n = parseInt(prompt("nhap so hang: "));
var m = parseInt(prompt("nhap so cot: "));
function declareArray() {
    if (isNaN(n) || isNaN(m) || n < 0|| m < 0) {
        alert("nhap lai thong tin")
    } else {
        array = new Array(n)
        for (var i = 0; i< n; i++) {
            array[i] = new Array(m)
    
        
        }
    }
    elementArray()
}
function elementArray() {
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < m; j++) {
            array[i][j] = parseInt(prompt("nhap so:"))
            
        }
    }
}
