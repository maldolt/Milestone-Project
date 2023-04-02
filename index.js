//Declare variables from divs in HTML


//trying querySelector by class
window.onload = function() {

    let letterDiv = document.querySelector(".letter-div"); //html line 21
    let wordDiv = document.querySelector(".word-div"); //html line 22
    let livesSpan = document.querySelector(".lives"); //html line 23
    let notification = document.querySelector(".notification"); //html line 27
    let notificationResults = document.querySelector(".notification-result") //html line 29
    let resetButton = document.querySelector(".reset"); //html line 24
    let notificationSpan = document.querySelector(".notification-span"); //html line 30
    let playAgain = document.querySelector(".notification-button"); //html line 31
    let letters;
    let lives;

    //words for the word div
    let words = new Map([
        ['whale'],['turtle'],['fish'],
      ]);
      

    let word_list = [...words.keys()];
    //Get random word from choices
    let getRandomWord = function(list) {
        return list[Math.floor(Math.random() * word_list.length)];
    };
    let select_word;


// making buttons for letters, setting starting point and reset
    let init = function(state){
        wordDiv.innerHTML = '';
        if (state === 'start') {
            //letters
            for(let i of 'abcdefghijklmnopqrstuvwxyz'){
                let html = `<button class="alphabet">${i.toUpperCase()}</button>`;
                letterDiv.insertAdjacentHTML('beforeend',html);
            }
        }else if (state === 'reset'){
            letters.forEach(button => {
            button.classList.remove('disabled');
            notification.classList.add('hidden');
            });    
        }
        select_word = getRandomWord(word_list); 
        lives = 8; 
        letters = document.querySelectorAll(".alphabet");
        livesSpan.textContent = lives;
     
        //selecting the word from choices
   
             
        for(let i = 0; i < select_word.length; i++){
            let html = `<p class="word">_</p>`;
            wordDiv.insertAdjacentHTML('beforeend', html);
        }    
    }; 
    init('start');

    let showNotification = function (msg) {
        notification.classList.remove('hidden');
        notificationSpan.textContent = select_word;
        notificationResults.textContent = `You ${msg}`;
    };
    // decrease life
let decreaseLife = function () {
    lives--;

    liveSpan.textContent = lives;
    if (lives === 0) {
      showNotif('lost');
    }
  };
}  
    console.log(lives);    

   
//need to countinue to trouble shoot, letters are not showing up

