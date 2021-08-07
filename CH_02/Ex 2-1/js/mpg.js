const calculate = () => {
  var miles = prompt("Enter miles driven");
  miles = parseFloat(miles);

  var gallons = prompt("Enter gallons of gas used");
  gallons = parseFloat(gallons);

  var mpg = parseInt(miles / gallons);

  document.writeln("<h1>The Miles Per Gallon Application</h1>");
  document.writeln("Miles driven = " + miles + "<br/>");
  document.writeln("Gallons of gas = " + gallons + "<br/><br/>");
  document.writeln("Miles per gallon = " + mpg + "<br/><br/>");
  document.writeln("Thanks for using our MPG application.");
};

onload = () => {
  calculate();
};
