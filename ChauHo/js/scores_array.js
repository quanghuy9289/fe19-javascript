let entry;
let average;
let scores = [];
let total = 0;
let highestScore = 0;
let show = "The test scores:\n";

//first use a do-while loop to get scores from user
do {
  entry = parseInt(prompt(`Enter test score Or enter 999 to end entries`, 999));
  if (entry >= 0 && entry <= 100) {
    scores[scores.length] = entry;
  } else if (entry !== 999) {
    alert(
      `Entry must by a valid number from 0 through 100 Or enter 999 to end entries`
    );
  }
} while (entry !== 999);

//next use a for loop to process the scores

for (let i = 0; i < scores.length; i++) {
  total = total + scores[i]; //both are numbers so adds
  show = show + scores[i] + "\n"; //strings & numbers so concatenates

  // Take highestScore

  if (scores[i] > highestScore) {
    highestScore = scores[i];
  }
}

//then calculate the average and display
average = parseInt(total / scores.length);

// for (let i = 0; i < scores.length; i++) {
//   highestScore = scores[i];
//   if (highestScore > scores[i]) {
//     highestScore = scores[i];
//   }
// }

alert(
  show + "\nAverage score is " + average + "\nHighest score is " + highestScore
);
