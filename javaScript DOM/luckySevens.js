function placeBet() {
  var startingBet = document.getElementById("startingBet").value;
  startingBet = Number(startingBet);
  if (isNaN(startingBet)){
    alert("Starting bet must be a a valid $ amount.")
  }
  if (startingBet <= 0) {
    alert("Starting bet must be more than $0.")
  }
}

function rollDice() {
  document.getElementById("answer").style.display = "block";
  var gameMoney = document.getElementById("startingBet").value;
  gameMoney = Number(gameMoney);
  // var gameMoney = placeBet()
  //will eventually need something like randomNumber = Math.floor(Math.random() * 6) to find dice1 and dice2 total;
  var dice1 = return Math.floor(Math.random() * 6);
  var dice2 = return Math.floor(Math.random() * 6);
  var diceTotal = dice1 + dice2;
  }
  if (diceTotal = 7) {
    gameMoney = gameMoney + 4;
  } else {
    gameMoney = gameMoney - 1;
  }
return gameMoney
}

// function youLose() {
//   rollDice();
//   if (gameMoney >= 0) {
//     alert("Game Over. (Place another bet?)")
//   }
// }

// function showResults() {
//     document.getElementById("answer").style.display = "block";
//
// }
