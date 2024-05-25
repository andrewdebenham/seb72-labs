/*-------------------------------- Constants --------------------------------*/

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

/*---------------------------- Variables (state) ----------------------------*/

let board;
let turn;
let winner;
let tie;

/*------------------------ Cached Element References ------------------------*/

squareElements = document.querySelectorAll('.sqr');
messageElement = document.querySelector('#message');
resetButtonElement = document.querySelector('#reset');

/*-------------------------------- Functions --------------------------------*/

const render = () => {
    updateBoard();
    updateMessage();
}


const updateBoard = () => {
    board.forEach( (sqr, idx) => {
        squareElements[idx].textContent = board[idx];
    });
}


const updateMessage = () => {
    if (winner === false && tie === false) {
        messageElement.textContent = `Player ${turn}'s turn.`;
    } else if (winner === false && tie === true) {
        messageElement.textContent = `The game is tied.`
    } else {
        messageElement.textContent = `Congratulations - Player ${turn} wins!`
    }
}


const handleClick = (event) => {
    const squareIndex = event.target.id;
    if (board[squareIndex] === 'X' || board[squareIndex] === 'O') {
        return;
    } else if (winner === true) {
        return;
    }

    placePiece(squareIndex);
    checkForWinner();
    if (!winner) {
        checkForTie();
        if (!tie) {
            switchPlayerTurn();
        }
    }
    
    render();
}


const placePiece = (index) => {
    board[index] = turn;
    console.log(board);
}


const checkForWinner = () => {
    winningCombos.forEach( (combo) => {
        const a = combo[0];
        const b = combo[1];
        const c = combo[2];

        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            winner = true;
        }
    });
    return;
}


const checkForTie = () => {
    if (winner) {
        return;
    }
    if (board.includes('')) {
        tie = false;
    } else {
        tie = true;
    }
}


const switchPlayerTurn = () => {
    if (winner) {
        return;
    } else {
        if (turn === 'X') {
            turn = 'O';
        } else if (turn === 'O') {
            turn = 'X';
        }
    }
}


const init = () => {

    // reset the board
    board = [
        '', '', '', 
        '', '', '', 
        '', '', ''
    ];

    // Set turn to player X
    turn = 'X';

    // set game state
    winner = false;
    tie = false;

    // call render function
    render();
    
}


init()

/*----------------------------- Event Listeners -----------------------------*/

squareElements.forEach( (sqr) => {
    sqr.addEventListener('click', handleClick);
});

resetButtonElement.addEventListener('click', init);

