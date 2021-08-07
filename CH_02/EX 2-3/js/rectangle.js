const calculate = () => {
  var length = prompt("Enter length");
  length = parseFloat(length);

  var width = prompt("Enter width");
  width = parseFloat(width);

  var area = width * length;
  var perimeter = 2 * (length + width);

  document.writeln("<h1>The Area and Perimeter App</h1>");
  document.writeln("Length = " + length + "<br/>");
  document.writeln("Width = " + width + "<br/><br/>");

  document.writeln("Area = " + area + "<br/>");
  document.writeln("Perimeter = " + perimeter + "<br/><br/>");
  document.writeln("Thanks for using Area and Perimeter application!");
};

onload = () => {
  calculate();
};
