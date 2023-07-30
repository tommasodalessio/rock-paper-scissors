
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
function game (playerSelection, computerSelection) {
    //made a varible that contains the answer
    let answer_value;
    // made the playerSelection and the computerSelection case insensitive  
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    //check the playerSelection if it's diffenent from rock paper or scissors
    console.log(computerSelection);
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
        answer_value = "Invalid player selection, try again";
    }
    return answer_value;
}


