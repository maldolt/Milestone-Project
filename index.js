//Declare variables from divs in HTML


//trying querySelector by class
window.onload = function() {


    let lettersDiv = document.querySelector(".letters-div");
    let canvas = document.querySelector(".canvas");
    let wordDiv = document.querySelector(".word-div");
    let livesSpan = document.querySelector(".lives");
    let notification = document.querySelector(".notification");
    let resetButton = document.querySelector(".reset");
    let playAgain = document.querySelector(".notification-button");

    let letters;
    let lives;

    //words for the word div
    let words = new Map ([['whale', 'largest animal'], 
    ['fish', ' most common'], ['shark', 'dangerous']]);

    let wordChoice = [...words.keys()];
    //Get random word from choices
    let getRandomWord = function(list) {
        return list[Math.floor(Math.random() * wordChoice.length)];
    };
    let select_word= getRandomWord(wordChoice)   
console.log(wordChoice);

// making buttons for letters, setting starting point and reset
    let init = function(state){
        wordDiv.innerHTML = '';
        if (state === 'start') {
            //letters
            for(let i of 'abcdefghijklmnopqrstuvwxyz'){
                let html = `<button class="alphabet">${i.toUpperCase()}</button>`;
                lettersDiv.insertAdjacentHTML('beforeend',html);
            }
        }else if (state === 'reset'){
            letters.forEach(button => {
                button.wordChoice.remove('disabled');
            });
            notification.wordChoice.add('hidden');
        }
    };
    letters = document.querySelectorAll('.alphabet');
    livesSpan.textContent = lives;
}

