const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;
const WIN = 0;
const LOOSE = 1;
const DRAW = 2;

const status_msg = document.getElementById("status-msg");
const rock_button = document.getElementById("rock");
const paper_button = document.getElementById("paper");
const scissors_button = document.getElementById("scissors");

function getRandomNumber(range) {
    return Math.floor(Math.random() * range);
}

function choiceToString(choice) {
    switch (choice) {
        case ROCK: return "rock";
        case PAPER: return "paper";
        case SCISSORS: return "scissors";
    }
}

function win(user_choice, bot_choice) {
    let user_choice_str = choiceToString(user_choice);
    let bot_choice_str = choiceToString(bot_choice);

    status_msg.textContent  = `User won by using ${user_choice_str} against ${bot_choice_str}.`;
    
    let button_img = document.getElementById(user_choice_str).getElementsByTagName("img")[0];
    button_img.style.borderColor = "#27eb79";
    setTimeout(() => {button_img.style.borderColor = "#303030"}, 250)
}

function loose(user_choice, bot_choice) {
    let user_choice_str = choiceToString(user_choice);
    let bot_choice_str = choiceToString(bot_choice);
    
    status_msg.textContent = `User lost by using ${user_choice_str} against ${bot_choice_str}.`;

    let button_img = document.getElementById(user_choice_str).getElementsByTagName("img")[0];
    button_img.style.borderColor = "#c73939";
    setTimeout(() => {button_img.style.borderColor = "#303030"}, 250)
}

function draw(user_choice, bot_choice) {
    let user_choice_str = choiceToString(user_choice);
    let bot_choice_str = choiceToString(bot_choice);
    
    status_msg.textContent = `User drew by using ${user_choice_str} against ${bot_choice_str}.`;
    
    let button_img = document.getElementById(user_choice_str).getElementsByTagName("img")[0];
    button_img.style.borderColor = "#181818";
    setTimeout(() => {button_img.style.borderColor = "#303030"}, 250)
}

function game(user_choice) {
    let bot_choice = getRandomNumber(3);
    
    let result = 0;

    switch (user_choice) {
        case ROCK:
            switch (bot_choice) {
                case ROCK: result = DRAW; break;
                case PAPER: result = LOOSE; break;
                case SCISSORS: result = WIN; break;
            }

        case PAPER:
            switch (bot_choice) {
                case ROCK: result = WIN; break;
                case PAPER: result = DRAW; break;
                case SCISSORS: result = LOOSE; break;
            }
        
        case SCISSORS:
            switch (bot_choice) {
                case ROCK: result = LOOSE; break;
                case PAPER: result = WIN; break;
                case SCISSORS: result = DRAW; break;
            }
    }

    switch (result) {
        case WIN:
            win(user_choice, bot_choice);
            break;
        case LOOSE:
            loose(user_choice, bot_choice);
            break;
        case DRAW:
            draw(user_choice, bot_choice);
            break;
    }
}

function main() {
    rock_button.addEventListener('click', () => {game(ROCK)});
    paper_button.addEventListener('click', () => {game(PAPER)});
    scissors_button.addEventListener('click', () => {game(SCISSORS)});
}

main();