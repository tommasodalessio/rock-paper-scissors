let playScore = 0;
let computerScore = 0;
const maxScore = 5;

//interactive buttons
const btn = document.querySelectorAll('.choice');

btn.forEach(button => {
    button.addEventListener('click', function () {         
        playRound(this.value);
    });
});


function playRound (playerChoice) {
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
        playScore++; //number one rapresents the winning of the user
    } else {
        result = "You LOST!";
        computerScore++; //number 2 rapresents the winning of the computer
    }
    // Mostra il risultato al giocatore
    //alert(`You chose: ${playerChoice}\nComputer chose: ${computerChoice}\nResults: ${result}`);
    const container = document.querySelector('#container');
    
    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = result + ' You chose ' + playerChoice + ', Computer chose ' + computerChoice + '!'; 

    container.appendChild(content); 
    
    const score = document.createElement('div');
    score.classList.add('score');
    score.textContent = 'Punteggio: \nGiocatore: ' + playScore + '\nComputer: ' + computerScore;

    container.appendChild(score); 


    if (playScore === maxScore || computerScore === maxScore) {

        let winning; 

        if (playScore > computerScore){
            winning = "YOU WIN THE FUCKING MATCH !!!! \n GOOD JOB"
        }
        else{
            winning = "POOR LOOSER!!!"
        }

        const btn = document.querySelectorAll('.choice');
        
        btn.forEach(button => {
            button.disabled = true;
        });

        const playAgain = document.createElement('button');
        playAgain.classList.add ('playAgain');
        playAgain.textContent = 'PLAY AGAIN';

        const winningText = document.createElement('div');
        winningText.classList.add('winningText');
        winningText.textContent = winning;

        container.appendChild(winningText);
        container.appendChild(playAgain);


        playAgain.addEventListener('click', function () {         
            location.reload();
        });
    }
}

