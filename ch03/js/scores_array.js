var entry;
var average;
var scores = [];
var total = 0;
var show = "The test scores:\n";

//first use a do-while loop to get scores from user
do {
    entry = prompt("Enter test score\n" +
        "Or enter 999 to end entries", 999);
    entry = parseInt(entry);
    if (entry >= 0 && entry <= 100) {
        scores[scores.length] = entry;
    } else if (entry != 999) {
        alert("Entry must by a valid number from 0 through 100\n" +
            "Or enter 999 to end entries");
    }
}
while (entry != 999);

//next use a for loop to process the scores
var highestScore = 0;
var lowestScore = scores[0];
for (var i = 0; i < scores.length; i++) {
    total += scores[i]; //both are numbers so adds
    if (scores[i] > highestScore) {
        highestScore = scores[i];
    } // The highest score

    if (scores[i] < lowestScore) {
        lowestScore = scores[i];
    } //The lowest score

    show = show + scores[i] + "\n"; //strings & numbers so concatenates

    /* 
        //Using built-in functions
        var highestScore = Math.max.apply(Math, scores);
        var lowestScore = Math.min.apply(Math, scores);
    */
}

//then calculate the average and display
average = parseInt(total / scores.length);
alert(show + "\nAverage score is " + average + "\nHighest score is: " + highestScore + "\nThe lowest score is: " + lowestScore);