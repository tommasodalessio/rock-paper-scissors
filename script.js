
/*function game () {
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
*/

//function for the single game
function playRound (playerChoice) {
    // Genera una scelta casuale per il computer
    const choices = ['PAPER', 'SCISSORS', 'ROCK'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // Determina il risultato del gioco
    let result;
    if (playerChoice === computerChoice) {
        result = "It's a DRAW";
    } else if (
        (playerChoice === 'SCISSORS' && computerChoice === 'PAPER') ||
        (playerChoice === 'ROCK' && computerChoice === 'SCISSORS') ||
        (playerChoice === 'PAPER' && computerChoice === 'ROCK')
    ) {
        result = "You  WIN!";
    } else {
        result = "You LOST!";
    }

    // Mostra il risultato al giocatore
    //alert(`You chose: ${playerChoice}\nComputer chose: ${computerChoice}\nResults: ${result}`);
    const container = document.querySelector('#container');
    
    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = result + ' You chose ' + playerChoice + ', Computer chose ' + computerChoice + '!'; 

    container.appendChild(content);
    
}


//interactive buttons
const btn = document.querySelectorAll('.choice');

btn.forEach(button => {
    button.addEventListener('click', function () {
        playRound(this.value);
    });
});



