var a;
var b;
var perimeter;
var area;

//Nhập chiều dài và chiều rông
a = parseInt(prompt("Enter length:"));
b = parseInt(prompt("Enter width:"));
if (a >= b) {
    perimeter = (a + b) * 2;
    alert("Perimeter: " + perimeter);
    area = a * b;
    alert("Area: " + area);
};
else {
    alert("Please enter length greater than width. Thank you!");
};

//Xuất dữ liệu ra trình duyệt
document.write(
    "<h1>The Area and Perimeter App</h1>",
    "Length: " + a + "<br>",
    "Width: " + b + "<br>",
    "Perimeter: " + perimeter + "<br>",
    "Area: " + area + "<br><br>",
    "Thanks for using the Area and Perimeter application!"
);