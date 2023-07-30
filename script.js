
function getComputerChoice () {
//create a varible for the return value
let answer;
//use the method random, asking a random number from o to 2 
let x = Math.floor(Math.random() * 3);
//if the number is 0 -> Rock 
if (x == 0) {
    answer = "Rock";
}
//if the number is 1 -> Paper 
else if (x == 1) {
    answer = "Paper";
}
//if the number is 2 -> Scissors 
else {
    answer = "Scissors";
}
//return the value +
return answer;
}
function playRound (playerSelection, computerSelection) {
    //made a varible that contains the answer
    let answer_value;
    // made the playerSelection and the computerSelection case insensitive  
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    //check the playerSelection if it's diffenent from rock paper or scissors
    if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors"){
        //if they are the same -> drawn
        if (playerSelection == computerSelection) {
            answer_value = "It's a drawn, sad!!"
        }
        //if they are different: 
        else {
            //  - rock beats scissors 
            if (playerSelection == "rock" && computerSelection == "scissors"){
                answer_value = "You Win! Rock beats Scissors";
            }
            //  - scissors beats paper 
            else if (playerSelection == "scissors" && computerSelection == "paper"){
                answer_value = "You Win! Scissors beats Paper";
            }
            //  - paper beats rock 
            else if (playerSelection == "paper" && computerSelection == "rock"){
                answer_value = "You Win! Paper beats Rock";
            }
            else {
                playerSelection = playerSelection[0].toUpperCase() + playerSelection.substring(1);
                computerSelection = computerSelection[0].toUpperCase() + computerSelection.substring(1);
                answer_value = "You Lost! " + computerSelection + " beats " + playerSelection;
            }

        }
    
    }
    else {
        console.log("Invalid player selection, try again");
    }
    return answer_value;
}
function game () {
    // make a varibale for the numbers of round and for the counter of the win
    let numberRound = 5;
    let counter_user = 0, counter_computer = 0;
    //play 5 rounds 
        // for each round take the input from the users with prompt()
        for (i = 0; i < numberRound; i++) {
            // for each round state the andwar 
            let usersSelection = prompt("insert your value");
            let answer = playRound(usersSelection, getComputerChoice());
            console.log(answer);
            // keep the score 
                //define a variable contains to win to check if i win or lose
            let substr_win = "Win", substr_lost = "Lost";
            if (answer.includes(substr_win)){
                counter_user ++;
            }
            else if (answer.includes(substr_lost)){
                counter_computer ++;
            }
        }
    // disply the winner
    if (counter_computer > counter_user){
        console.log ("You Lost!");
    }
    else {
        console.log ("You Win!");
    }
    console.log("computer: " + counter_computer);
    console.log("user: " + counter_user);
}

game();