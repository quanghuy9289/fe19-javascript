"use-strick";
var $ = document.getElementById.bind(document);
var getRandomNumber = function (max) {
  return Math.floor(Math.random() * max) + 1;
};
var changePlayer = function () {
  if ($("current").firstChild.nodeValue === $("player_1").value) {
    $("current").firstChild.nodeValue = $("player_2").value;
  } else {
    $("current").firstChild.nodeValue = $("player_1").value;
  }
  $("die").value = 0;
  $("total").value = 0;
  $("roll").focus();
};
var newGame = function () {
  $("score1").value = 0;
  $("score2").value = 0;
  if ($("player_1").value === "" || $("player_2").value === "") {
    alert("Please enter two player name");
    $("turn").removeAttribute("class");
  } else {
    $("turn").setAttribute("class", "open");
    changePlayer();
  }
};
var rollDice = function () {
  var total = parseInt($('total').value)
  var die = getRandomNumber(10)
  if(die === 1) {
    alert('You roll to 1 so you lose all points earned during the turn')
    total = 0;
    changePlayer()
  } else {
    total += die
  }
  $('total').value = total;
  $('die').value = die;
};
var holdTurn = function() {
  var score;
  var total =parseInt( $('total').value)
  if($('current').firstChild.nodeValue === $('player_1').value) {
    score = $('score1')
  } else {
    score = $('score2')
  }
  score.value = parseInt(score.value) + total
  if(score.value >= 100) {
    alert ($('current').firstChild.nodeValue + ' WIN')
    newGame()
  } else {
    changePlayer()
  }
}
window.onload = function () {
  $('new_game').onclick = newGame
  $('roll').onclick = rollDice
  $('hold').onclick = holdTurn
  $('player_1').focus()
}
