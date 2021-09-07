"use strict";
var $ = function(id) { return document.getElementById(id); };

var getRandomNumber = function(max) {
    var random;
    if (!isNaN(max)) {
        random = Math.random(); //value >= 0.0 and < 1.0
        random = Math.floor(random * max); //value is an integer between 0 and max - 1
        random = random + 1; //value is an integer between 1 and max
    }
    return random;
};

// average rolls for a 6
var averageRolls = function() {
	var total = 0;
	var count = 0;
	var max = -Infinity;
	var rolls;
	for (var count = 0;count < 10000 ;count++) {
		rolls = 1;
		do {rolls++;
			
		} while (getRandomNumber(6) !== 6);
		// while ( getRandomNumber(6) !== 6 ) {
		// 	rolls++;
		// }
		total += rolls;
		if ( rolls > max ) max = rolls;
	}
	// while ( count < 10000 ) {
	// 	rolls = 1;
	// 	while ( getRandomNumber(6) !== 6 ) {
	// 		rolls++;
	// 	}
	// 	total += rolls;
	// 	count++;
	// 	if ( rolls > max ) max = rolls;
	// }
	var average = total / count;
	alert ("Average rolls: " + average.toFixed(0) + "\n\nMax rolls: " + max);
}

// display factors
var displayFactors = function() {
	var number = $("number").value;
	var factors = "";
	for ( var i = 1; i < number; i++ ) {
		if ( number % i === 0 ) {
			factors +=  i + " ";
		}
	}
	alert("Factors of ".concat(number, ": ", factors));
}

// determine if a number is prime
var determineIfPrime = function() {
	var number = $("number").value;
	// var prime = true;
	var message;
	var prime = isPrime(number);
	if (prime == 0) {
		message = number + " not is a prime"
	} else {
		message = number + " is prime"
	}
	// for ( var i = 2; i < number; i++ ) {
	// 	if ( number % i === 0 ) prime = false;
	// }
	// if (prime) {
	//     message = number + " is prime.";
	// } else {
	//     message = number + " is not prime.";
	// }
	// // alert(message);
	$("primes").value = message;
}
var getPrimeNumbers = function () {
	var number = $("number").value;
	var count = 0;
	var result = "";
	for (var i = 2; i <= number; i++) {
	  if (isPrime(i)) {
		count++;
		result += i + " ";
	  }
	}
	$("count").value = count;
	$("primes").value = result;
  };
var isPrime = function (number) {
	var prime = 1;
	for ( var i = 2; i < number; i++ ) { 
		if (number % i == 0) {
			prime = 0;
			break;
		}		
	}
	return prime
	
}
var processEntries = function() {
	// averageRolls();
	// displayFactors();
	getPrimeNumbers()
	determineIfPrime();
	isPrime()
}

window.onload = function() {
	$("calculate").onclick = processEntries;
	$("number").focus();
};
