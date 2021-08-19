"use strict";
const query = function (id) {
  return document.getElementById(id);
};

const getRandomNumber = function (max) {
  const randomNumber = Math.trunc(Math.random() * max) + 1;
  return randomNumber;
};

// average rolls for a 6
// const averageRolls = function () {
//   let total = 0;
//   let count = 0;
//   let max = 0;
//   let rolls;

//   while (count < 10000) {
//     rolls = 0;
//     do {
//       rolls++;
//     } while (getRandomNumber(6) !== 6);
//     total += rolls;
//     count++;
//     if (rolls > max) max = rolls;
//   }
//   const average = total / count;
//   alert("Average rolls: " + average.toFixed(0) + "\n\nMax rolls: " + max);
// };

// display factors
// const displayFactors = function () {
//   const number = query("number").value;
//

//   let factors = "";
//   for (let i = 1; i < number; i++) {
//     if (number % i === 0) {
//       factors += i + " ";
//     }
//   }
//
//   // alert("Factors of ".concat(number, ": ", factors));
// };

// determine if a number is prime
// const determineIfPrime = function () {
//   const number = query("number").value;
//   const textArea = query("primes");
//   let prime = true;
//   let message;
//   for (let i = 2; i < number; i++) {
//     if (number % i === 0) prime = false;
//   }
//   if (prime) {
//     message = number + " is prime.";
//     textArea.value += `${number} `;
//   } else {
//     message = number + " is not prime.";
//   }
//   console.log(message);
// };
// const isPrime = function (num) {
//   if (num === 2) {
//     return true;
//   } else if (num > 1) {
//     for (var i = 2; i < num; i++) {
//       if (num % i !== 0) {
//         return true;
//       } else if (num === i * i) {
//         return false;
//       } else {
//         return false;
//       }
//     }
//   } else {
//     return false;
//   }
// };

const isPrime = (num) => {
  for (let i = 2; i < num; i++) if (num % i === 0) return false;
  return true;
};
const showPrimes = function () {
  const number = query("number").value;
  const groupPrimes = [];

  for (let i = 1; i <= number; i++) {
    if (isPrime(i)) groupPrimes.push(i);
  }
  query("count").value = groupPrimes.length;
  query("primes").value = [...groupPrimes];
};

const processEntries = function () {
  // averageRolls();
  //   displayFactors();
  // determineIfPrime();
  showPrimes();
};

window.onload = function () {
  query("calculate").onclick = processEntries;
  query("number").focus();
};
