let playerOneMoveOneType = undefined;
let playerOneMoveTwoType = undefined;
let playerOneMoveThreeType = undefined;

let playerOneMoveOneValue = undefined;
let playerOneMoveTwoValue = undefined;
let playerOneMoveThreeValue = undefined;

let playerTwoMoveOneType = undefined;
let playerTwoMoveTwoType = undefined;
let playerTwoMoveThreeType = undefined;

let playerTwoMoveOneValue = undefined;
let playerTwoMoveTwoValue = undefined;
let playerTwoMoveThreeValue = undefined;

function setPlayerMoves(player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) {
  if (player === 'Player One') {
    playerOneMoveOneType = moveOneType;
    playerOneMoveOneValue = moveOneValue;
    playerOneMoveTwoType = moveTwoType;
    playerOneMoveTwoValue = moveTwoValue;
    playerOneMoveThreeType = moveThreeType;
    playerOneMoveThreeValue = moveThreeValue;
  } else if (player === 'Player Two') {
    PlayerTwoMoveOneType = moveOneType;
    PlayerTwoMoveOneValue = moveOneValue;
    PlayerTwoMoveTwoType = moveTwoType;
    PlayerTwoMoveTwoValue = moveTwoValue;
    PlayerTwoMoveThreeType = moveThreeType;
    PlayerTwoMoveThreeValue = moveThreeValue;
  }
}

function getRoundWinner (roundNumber) {
  playerOneMove = '';
  playerTwoMove = '';
  playerOneValue = '';
  playerTwoValue= '';

  switch (roundNumber) {
    case 1:
      playerOneMove = playerOneMoveOneType;
      playerOneValue = playerOneMoveOneValue;

      playerTwoMove =  playerTwoMoveOneType;
      playerTwoValue = playerTwoMoveOneValue;
      break;
    
    case 2:
      playerOneMove = playerOneMoveTwoType;
      playerOneValue = playerOneMoveTwoValue;

      playerTwoMove =  playerTwoMoveTwoType;
      playerTwoValue = playerTwoMoveTwoValue;
      break;
    
    case 3:
      playerOneMove = playerOneMoveThreeType;
      playerOneValue = playerOneMoveThreeValue;

      playerTwoMove =  playerTwoMoveThreeType;
      playerTwoValue = playerTwoMoveThreeValue;
      break;
  
    default:
      return 'Tie';
  }

  switch (playerOneMove) {
    case 'rock':
      if (playerTwoMove === 'paper') {
        return 'Player Two';
      } else if (playerTwoMove === 'scissors') {
        return 'Player One';
      } else if (platerTwoMove === 'rock') {
        if (playerOneValue === playerTwoValue) {
          return 'Tie';
        } else if (playerOneValue > playerTwoValue) {
          return 'Player One';
        } else if (playerOneValue < playerTwoValue) {
          return 'Player Two'
        }
      }
      break;

    case 'paper':
      if (playerTwoMove === 'scissors') {
        return 'Player Two';
      } else if (playerTwoMove === 'rock') {
        return 'Player One';
      } else if (platerTwoMove === 'paper') {
        if (playerOneValue === playerTwoValue) {
          return 'Tie';
        } else if (playerOneValue > playerTwoValue) {
          return 'Player One';
        } else if (playerOneValue < playerTwoValue) {
          return 'Player Two'
        }
      }
      break;

    case 'scissors':
      if (playerTwoMove === 'rock') {
        return 'Player Two';
      } else if (playerTwoMove === 'paper') {
        return 'Player One';
      } else if (platerTwoMove === 'scissors') {
        if (playerOneValue === playerTwoValue) {
          return 'Tie';
        } else if (playerOneValue > playerTwoValue) {
          return 'Player One';
        } else if (playerOneValue < playerTwoValue) {
          return 'Player Two'
        }
      }
      break;
  
    default:
      return 'error in determining round winner.';
  }
}

function getGameWinner() {
  let playerOneWins = '';
  let playerTwoWins = '';

for (let roundNumber = 1; roundNumber <= 3; roundNumber++) {
  let roundWinner = getRoundWinner(roundNumber)

  if (roundWinner === 'Player One') {
    playerOneWins++;
  } else if (roundWinner === 'Player Two') {
    playerTwoWins++;
  } else if (roundWinner === 'Tie') {
    playerOneWins++;
    playerTwoWins++;
  }
}

  if (playerOneWins === playerTwoWins) {
    return 'Tie';
  } else if (playerOneWins > playerTwoWins) {
    return 'Player One';
  } else if (playerOneWins < playerTwoWins) {
    return 'Player Two';
  }
}