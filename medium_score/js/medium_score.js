var average;
var total = 0;

//get 3 scores from user and add them together
var score1 = parseInt(prompt("Enter test score"));
total += score1;

var score2 = parseInt(prompt("Enter test score"));
total += score2;

var score3 = parseInt(prompt("Enter test score"));
total += score3;

//calculate the average
average = parseInt(total / 3);

document.write("<h1>The Test Scores App</h1>");
document.write(
    "Score 1 = " +
    score1 +
    "<br>" +
    "Score 2 = " +
    score2 +
    "<br>" +
    "Score 3 = " +
    score3 +
    "<br><br>" +
    "Average score = " +
    average +
    "<br><br>",
);