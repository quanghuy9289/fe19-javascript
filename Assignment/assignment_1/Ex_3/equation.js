"use strict";
var a = parseInt(prompt("Nhập giá trị a:"));
var b = parseInt(prompt("Nhập giá trị b:"));
if (isNaN(a) || isNaN(b)) {
    alert("Hãy nhập a và b là số nguyên")
} else if (a == 0) {
    document.write(
        "Giá trị a: " + a + "<br>",
        "\nGiá trị a: " + b + "<br>",
        "Phương trình ax + b = 0: Vô nghiệm"
    )
} else if (b == 0) {
    document.write(
        "Giá trị a: " + a + "<br>",
        "Giá trị a: " + b + "<br>",
        "Phương trình ax + b = 0: Vô sô nghiệm"
    )
} else {
    document.write(
        "Giá trị a: " + a + "<br>",
        "Giá trị a: " + b + "<br>",
        "Phương trình ax + b = 0 có nghiệm: x = " + " " + -b / a
    )
}