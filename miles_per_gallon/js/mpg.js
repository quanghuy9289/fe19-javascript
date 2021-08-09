var miles = prompt("Enter miles driven:");
miles = parseInt(miles);
var gallon = prompt("Enter gallons of gas used:");
gallon = parseInt(gallon);
var mpg = miles / gallon;
mpg = parseInt(mpg);
alert("Miles per gallon: = " + mpg);

document.write(
    "<h1>The Miles Per Galllon Application</h1>",
    "Miles driven = " + miles + "<br>",
    "Gallons of gas = " + gallon + "<br>",
    "Miles per gallons = " + mpg + "<br><br>",
    "Thanks for using our MPG application"
);