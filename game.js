const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;
const WIN = 0;
const LOOSE = 1;
const DRAW = 2;

// const result_panel = document.getElementById("result-panel");
const result_panel_msg = document.getElementById("result-panel-msg"); 
const status_panel_msg = document.getElementById("status-panel-msg");
const rock_button = document.getElementById("rock");
const paper_button = document.getElementById("paper");
const scissors_button = document.getElementById("scissors");

function getRandomNumber(range) {
    return Math.floor(Math.random() * range);
}

function choiceToString(choice) {
    switch (choice) {
        case ROCK: return "rock (👊)";
        case PAPER: return "paper (📄)";
        case SCISSORS: return "scissors (✂️)";
    }
}

function choiceToEmoji(choice) {
    switch (choice) {
        case ROCK: return "👊";
        case PAPER: return "📄";
        case SCISSORS: return "✂️";
    }
}

function showResult(user_choice, bot_choice, result) {
    let user_choice_str = choiceToString(user_choice);
    let bot_choice_str = choiceToString(bot_choice);

    console.log(`user_choice: ${user_choice_str}`);
    console.log(`user_choice: ${bot_choice_str}`);
    console.log(`result: ${result}`);
    
    let result_color = "";
    let result_message = "";
    let status_message = "";
    
    switch (result) {
        case (WIN):
            result_color = "#1ea155";
            result_message = "Victory";
            status_message = `User won over bot by using ${user_choice_str} against ${bot_choice_str}.`;
            break;

        case (LOOSE):
            result_color = "#c73939";
            result_message = "Defeat";
            status_message = `User lost to bot by using ${user_choice_str} against ${bot_choice_str}.`;
            break;
            
        case (DRAW):
            result_color = "#303030";
            result_message = "Draw";
            status_message = `User drew with bot by using ${user_choice_str} against ${bot_choice_str}.`;
            break;
    }
    
    // result_panel.style.style.borderColor = result_color;
    result_panel_msg.style.color = result_color;
    result_panel_msg.textContent = result_message;
    status_panel_msg.textContent = status_message;
}


function getResult(user_choice, bot_choice) {
    switch (user_choice) {
        case (ROCK):
            if (bot_choice === ROCK) {return DRAW;}
            if (bot_choice === PAPER) {return LOOSE;}
            if (bot_choice === SCISSORS) {return WIN;}
        
        case (PAPER):
            if (bot_choice === ROCK) {return WIN;}
            if (bot_choice === PAPER) {return DRAW;}
            if (bot_choice === SCISSORS) {return LOOSE;}
        
        case (SCISSORS):
            if (bot_choice === ROCK) {return LOOSE;}
            if (bot_choice === PAPER) {return WIN;}
            if (bot_choice === SCISSORS) {return DRAW;}
    }
}

function game(user_choice) {
    let bot_choice = getRandomNumber(3);
    let result = getResult(user_choice, bot_choice);
    showResult(user_choice, bot_choice, result);
}

function main() {
    rock_button.addEventListener('click', () => {game(ROCK)});
    paper_button.addEventListener('click', () => {game(PAPER)});
    scissors_button.addEventListener('click', () => {game(SCISSORS)});
}

main();