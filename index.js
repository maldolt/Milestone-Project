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
    let words = ['whale', 'turtle', 'shark'];

    let wordChoice = [...words.keys()];
    let getRandomWord = function(list) {
        return list[Math.floor(Math.random() * wordChoice.length)];
    };
    let select_word = getRandomWord(wordChoice);

    console.log(words);
}

