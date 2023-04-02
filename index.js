//Declare variables from divs in HTML


//trying querySelector by class
window.onload = function() {

    let lettersDiv = document.querySelector(".letters-div"); //html line 21
    let wordDiv = document.querySelector(".word-div"); //html line 22
    let livesSpan = document.querySelector(".lives"); //html line 23
    let notification = document.querySelector(".notification"); //html line 27
    let notificationResults = document.querySelector(".notification-result") //html line 29
    let resetButton = document.querySelector(".reset"); //html line 24
    let notificationSpan = document.querySelector(".notification-span"); //html line 30
    let playAgain = document.querySelector(".notification-button"); //html line 31

    //words for the word div
    let words = new Map ([['whale', 'largest animal'], 
    ['fish', 'most common'], ['shark', 'dangerous']]);

    let wordChoice = [...words.keys()];
    //Get random word from choices
    let getRandomWord = function(list) {
        return list[Math.floor(Math.random() * list.length)];
    };
    let select_word;
    let letters;
    let lives;
// making buttons for letters, setting starting point and reset
    let init = function(state){
        letters = document.querySelectorAll('.alphabet');
        lives = 8;
        wordDiv.innerHTML = '';
        if (state === 'start') {
            //letters
            for(let i of 'abcdefghijklmnopqrstuvwxyz'){
                let html = `<button class="alphabet">${i.toUpperCase()}</button>`;
                lettersDiv.insertAdjacentHTML('beforeend',html);
            }
        }else if (state === 'reset'){
            letters.forEach(button => {
            button.classList.remove('disabled');
             notification.classList.add('hidden');
            });
            select_word = getRandomWord(wordChoice);           
        }
        livesSpan.textContent = lives;

        //selecting the word from choices

        for(let i = 0; i < select_word.length; i++){
            let html = `<p class="word">_</p>`;
            wordDiv.insertAdjacentHTML('beforeend', html);
        }
    };
    init('start');

    //buttons press
    letters.forEach(button => {
        button.addEventListener('click', letterPress);
    });
}
//need to countinue to trouble shoot, letters are not showing up

