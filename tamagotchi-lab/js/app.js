/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/

const state = {
    boredom: 0,
    hunger: 0,
    sleepiness: 0
}
let timer;
let gameOver;

/*------------------------ Cached Element References ------------------------*/

const boredomStatElement = document.querySelector('#boredom-stat');
const hungerStatElement = document.querySelector('#hunger-stat');
const sleepinessStatElement = document.querySelector('#sleepiness-stat');

const playButton = document.querySelector('#play');
const feedButton = document.querySelector('#feed');
const sleepButton = document.querySelector('#sleep');

const gameMessageElement = document.querySelector('#message');
const resetButton = document.querySelector('#restart')

/*-------------------------------- Functions --------------------------------*/

const init = () => {
    resetButton.classList.add('hidden');
    state.boredom = 0;
    state.hunger = 0;
    state.sleepiness = 0;
    gameOver = false;
    timer = setInterval(runGame, 2000);
}

const runGame = () => {
    updateStates();
    checkGameOver();
    render();
}

const render = () => {
    boredomStatElement.textContent = state.boredom;
    hungerStatElement.textContent = state.hunger;
    sleepinessStatElement.textContent = state.sleepiness;
    if (gameOver) {
        clearInterval(timer);
        gameMessageElement.classList.remove('hidden');
        resetButton.classList.remove('hidden');
    }
}

const updateStates = () => {
    for (let stat in state) {
        state[stat] += getRandomNum();
    };
}

const getRandomNum = () => {
    return Math.floor(Math.random() * 4);
}

const checkGameOver = () => {
    if (state.boredom >= 10 || state.hunger >= 10 || state.sleepiness >= 10) {
        gameOver = true;
    }
}

const playButtonClick = () => {
    state.boredom = 0;
    render();
}

const feedButtonClick = () => {
    state.hunger = 0;
    render();
}

const sleepButtonClick = () => {
    state.sleepiness = 0;
    render();
}

/*----------------------------- Event Listeners -----------------------------*/

playButton.addEventListener('click', playButtonClick);
feedButton.addEventListener('click', feedButtonClick);
sleepButton.addEventListener('click', sleepButtonClick);

resetButton.addEventListener('click', init);



init();
render();