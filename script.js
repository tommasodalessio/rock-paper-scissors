console.log("Hello World");

/* create a function called getComputerChoice that will randomly return: 
    - Rock 
    - Paper 
    - Scissors
*/

//create a function named getComputerChoice
function getComputerChoice () {
//create a varible for the return value
let answer;
//use the method random, asking a random number from o to 2 
let x = Math.floor(Math.random() * 3);
console.log(x)
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
console.log(answer)
return answer;
}

getComputerChoice();


