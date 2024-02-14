import inquirer from 'inquirer';

let playerChoice = "";
 
const func = async () => {
    let result = await inquirer.prompt({
        name: "result",
        type:"list",
        message:"Which do you choose?",
        choices: ["Rock", "Paper", "Scissors"]
    });

    playerChoice = result.result;
    return result.result;
}
 
 
const display = async () => {
    let response = await func()
    console.log(response)
}

const compPicker = () => {
    const randomNum = Math.floor(Math.random() * 3);
    const choices = ["Rock", "Paper", "Scissors"];
    const computerChoice = choices[randomNum];

    console.log(`Computer chose: ${computerChoice}`);
    return computerChoice;
}

const checkWinner = (player, computer) => {
    if (player === computer) {
        return "It's a tie!";
    } else if ((player === "Rock" && computer === "Scissors") ||
               (player === "Paper" && computer === "Rock") ||
               (player === "Scissors" && computer === "Paper")) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}

const playGame = async () => {
    await display();
    const computerChoice = compPicker();
    const result = checkWinner(playerChoice, computerChoice);
    console.log(result);
}

playGame();