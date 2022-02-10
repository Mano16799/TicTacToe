let allButtons = [[{ id: 0, val: '' }, { id: 1, val: '' }, { id: 2, val: '' }], [{ id: 3, val: '' }, { id: 4, val: '' }, { id: 5, val: '' }], [{ id: 6, val: '' }, { id: 7, val: '' }, { id: 8, val: '' }]];
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

        for (k = 0; k < allButtons.length; k++) {
            for (j = 0; j < allButtons.length; j++) {
                if (allButtons[k][j].id == i) {
                    allButtons[k][j].val = 'x'
                }
            }
        }
    }
    else {
        xoButtons[i].innerText = "o";
        currentPlayer = player2
        nextPlayer.innerText = 'Turn Played By = ' + player2

        for (k = 0; k < allButtons.length; k++) {
            for (j = 0; j < allButtons.length; j++) {
                if (allButtons[k][j].id == i) {
                    allButtons[k][j].val = 'o'
                }
            }
        }
    }
    console.log(allButtons)
    count++;
    moves--;
    moveCount.innerText = 'Moves left = ' + moves
    xoButtons[i].disabled = true
    if (winMessageCount <= 0) {
        if ((allButtons[0][0].val == 'x' && allButtons[0][1].val == 'x' && allButtons[0][2].val == 'x') ||
            (allButtons[1][0].val == 'x' && allButtons[1][1].val == 'x' && allButtons[1][2].val == 'x') ||
            (allButtons[2][0].val == 'x' && allButtons[2][1].val == 'x' && allButtons[2][2].val == 'x') ||
            (allButtons[0][0].val == 'x' && allButtons[1][0].val == 'x' && allButtons[2][0].val == 'x') ||
            (allButtons[0][1].val == 'x' && allButtons[1][1].val == 'x' && allButtons[2][1].val == 'x') ||
            (allButtons[0][2].val == 'x' && allButtons[1][2].val == 'x' && allButtons[2][2].val == 'x') ||
            (allButtons[0][0].val == 'x' && allButtons[1][1].val == 'x' && allButtons[2][2].val == 'x') ||
            (allButtons[0][2].val == 'x' && allButtons[1][1].val == 'x' && allButtons[2][0].val == 'x') ||

            (allButtons[0][0].val == 'o' && allButtons[0][1].val == 'o' && allButtons[0][2].val == 'o') ||
            (allButtons[1][0].val == 'o' && allButtons[1][1].val == 'o' && allButtons[1][2].val == 'o') ||
            (allButtons[2][0].val == 'o' && allButtons[2][1].val == 'o' && allButtons[2][2].val == 'o') ||
            (allButtons[0][0].val == 'o' && allButtons[1][0].val == 'o' && allButtons[2][0].val == 'o') ||
            (allButtons[0][1].val == 'o' && allButtons[1][1].val == 'o' && allButtons[2][1].val == 'o') ||
            (allButtons[0][2].val == 'o' && allButtons[1][2].val == 'o' && allButtons[2][2].val == 'o') ||
            (allButtons[0][0].val == 'o' && allButtons[1][1].val == 'o' && allButtons[2][2].val == 'o') ||
            (allButtons[0][2].val == 'o' && allButtons[1][1].val == 'o' && allButtons[2][0].val == 'o')
        ) {
            alert("Congratulations " + currentPlayer + "! You won the game")
            winMessageCount++;
        }
    }


}

function reset() {
    nextPlayer.innerText = 'Turn Played By =..... '
    moveCount.innerText = 'Moves left = 9'
    for (i = 0; i < xoButtons.length; i++) {
        xoButtons[i].innerText = ''
        xoButtons[i].disabled = false
    }
    for (k = 0; k < allButtons.length; k++) {
        for (j = 0; j < allButtons.length; j++) {
            allButtons[k][j].val = ''
        }
    }
    currentPlayer = ''
    count = 0;
    moves = 9;
    winMessageCount = 0;
}


