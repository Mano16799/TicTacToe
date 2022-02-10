// button click handler


//apply event to generate new game state


// game state renderer renders the generated game state

// renders text on button clicked with X or O

// disable the button clicked

// update panel values such as Turn Played By and Moves Left

// reset panel values to default values

// implement logic to get the winner

// announce winner


// REPLAY-MODE :: replay-game-button-clicked->fetches events recorded->apply event->generates new game state->render game state


// reset game to start a new



// bind events to clickable buttons

// all buttons has class - 'box'

let xoButtons = document.getElementsByClassName('box');
let moveCount = document.querySelector('#move-count');
let nextPlayer = document.querySelector('#next-player');

let player1 = 'Player 1'
let player2 = 'Player 2'
let currentPlayer = ''
var count = 0;
var moves = 9;
var winMessageCount = 0;

function printX(i, e) {
    if (count % 2 == 0) {
        xoButtons[i].innerText = "x";
        currentPlayer = player1
        nextPlayer.innerText = 'Turn Played By = ' + player1
    }
    else {
        xoButtons[i].innerText = "o";
        currentPlayer = player2
        nextPlayer.innerText = 'Turn Played By = ' + player2
    }
    count++;
    moves--;
    moveCount.innerText = 'Moves left = ' + moves
    xoButtons[i].disabled = true
    if (winMessageCount <= 0) {
        if ((xoButtons[0].innerText == 'x' && xoButtons[1].innerText == 'x' && xoButtons[2].innerText == 'x') ||
            (xoButtons[3].innerText == 'x' && xoButtons[4].innerText == 'x' && xoButtons[5].innerText == 'x') ||
            (xoButtons[6].innerText == 'x' && xoButtons[7].innerText == 'x' && xoButtons[8].innerText == 'x') ||
            (xoButtons[0].innerText == 'x' && xoButtons[3].innerText == 'x' && xoButtons[6].innerText == 'x') ||
            (xoButtons[1].innerText == 'x' && xoButtons[4].innerText == 'x' && xoButtons[7].innerText == 'x') ||
            (xoButtons[2].innerText == 'x' && xoButtons[5].innerText == 'x' && xoButtons[8].innerText == 'x') ||
            (xoButtons[0].innerText == 'x' && xoButtons[4].innerText == 'x' && xoButtons[8].innerText == 'x') ||
            (xoButtons[2].innerText == 'x' && xoButtons[4].innerText == 'x' && xoButtons[6].innerText == 'x') ||

            (xoButtons[0].innerText == 'o' && xoButtons[1].innerText == 'o' && xoButtons[2].innerText == 'o') ||
            (xoButtons[3].innerText == 'o' && xoButtons[4].innerText == 'o' && xoButtons[5].innerText == 'o') ||
            (xoButtons[6].innerText == 'o' && xoButtons[7].innerText == 'o' && xoButtons[8].innerText == 'o') ||
            (xoButtons[0].innerText == 'o' && xoButtons[3].innerText == 'o' && xoButtons[6].innerText == 'o') ||
            (xoButtons[1].innerText == 'o' && xoButtons[4].innerText == 'o' && xoButtons[7].innerText == 'o') ||
            (xoButtons[2].innerText == 'o' && xoButtons[5].innerText == 'o' && xoButtons[8].innerText == 'o') ||
            (xoButtons[0].innerText == 'o' && xoButtons[4].innerText == 'o' && xoButtons[8].innerText == 'o') ||
            (xoButtons[2].innerText == 'o' && xoButtons[4].innerText == 'o' && xoButtons[6].innerText == 'o')
        ) {
            alert("Congratulations " + currentPlayer + "! You won the game")
            winMessageCount++;
        }
    }


}

function reset() {
    nextPlayer.innerText = 'Turn Played By =..... '
    moveCount.innerText = 'Moves left = 0'
    for (i = 0; i < xoButtons.length; i++) {
        xoButtons[i].innerText = ''
        xoButtons[i].disabled = false
    }
    currentPlayer = ''
    count = 0;
    moves = 9;
    winMessageCount = 0;
}


