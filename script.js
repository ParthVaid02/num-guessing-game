const form = document.querySelector('form');
const restartBtn = document.getElementById('restart-btn')
const higherLower = document.querySelector("#higher-lower");
const over = document.querySelector('#result');
const noOfGuesses = document.querySelector('#noOfGuesses');
const inputBox = document.querySelector('#guessedNum')

const randNum = Math.floor(Math.random()*100) + 1;
let cnt = 0;

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const guessedNum = parseInt(inputBox.value);
    
    if(guessedNum){
        cnt++;
        if(guessedNum == randNum){
            over.innerHTML = `Your number is ${guessedNum} You guessed the answer in ${cnt} guesses`;
            noOfGuesses.innerHTML = `No. of Guesses: ${cnt}`;
            inputBox.value = ``;
        }
        else if(guessedNum < randNum){
            higherLower.innerHTML = `Guess Higher`;
            noOfGuesses.innerHTML = `No. of Guesses: ${cnt}`;
            inputBox.value = ``;
        }
        else{
            higherLower.innerHTML = `Guess Lower`;
            noOfGuesses.innerHTML = `No. of Guesses: ${cnt}`;
            inputBox.value = ``;
        }
    }
})

restartBtn.addEventListener('click',() => {
    window.location.reload()
})