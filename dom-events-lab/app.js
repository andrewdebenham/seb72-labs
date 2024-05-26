/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

let firstNumReceived = false;
let operatorReceived = false;
let secondNumReceived = false;

let x;
let y;
let operator;

/*------------------------ Cached Element References ------------------------*/

const calculator = document.querySelector('#calculator');
const display = document.querySelector('.display');

/*----------------------------- Event Listeners -----------------------------*/

calculator.addEventListener('click', (event) => {

    const input = event.target.innerText;

    printToDisplay(input);
    
    receiveInput(input);
    
    if (input === 'C') {
        clearDisplay();
    }

    if (input === '=') {
        result = solve(x, y, operator);
        clearDisplay();
        printToDisplay(result);
        }
    }
);

/*-------------------------------- Functions --------------------------------*/

const printToDisplay = (value) => {
    display.innerText += value;
}

const clearDisplay = () => {
    display.innerText = '';
    firstNumReceived = false;
    operatorReceived = false;
    secondNumReceived = false;
}

const receiveInput = (value) => {
    if (!firstNumReceived) {
        x = Number(value);
        console.log(`X: ${x}`)
        firstNumReceived = true;
    } else if (!operatorReceived) {
        operator = value;
        console.log(`X: ${operator}`)
        operatorReceived = true;
    } else if (!secondNumReceived) {
        y = Number(value);
        console.log(`X: ${y}`)
        secondNumReceived = true;
    }
}

const solve = (x, y, operator) => {
    if (operator === '+') {
        return (x + y).toString();
    } else if (operator === '-') {
        return (x - y).toString();
    } else if (operator === '*') {
        return (x * y).toString();
    } else if (operator === '/') {
        return (x / y).toString();
    }
}



// Attempted to handle larger sums / multiple digit inputs below but got a bit stuck and also ran out of time due to focusing on the tic tac toe lab

/*
const receiveInput = (value) => {
    if (!firstNumReceived) {
        while (!operatorReceived) {
            x += value;
            if (value === '+' || value === '-' || value === '*' || value === '/') {
                x = Number(x);
                firstNumReceived = true;
                operator = value;
                operatorReceived = true;
            }
        }
    } else if (!secondNumReceived) {
        while (!secondNumReceived) {
            y += value;
            if (value === '=') {
                y = Number(y);
                secondNumReceived = true;
            }
        }
    }
}
*/