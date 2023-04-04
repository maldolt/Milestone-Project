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
    let hintButton = document.querySelector(".hint-btn"); //html line 29
    let hintDiv = document.querySelector(".hint"); //html line 27
    let textHint = document.querySelector(".text-hint"); // html line 28
    let letters;
    let lives;

    //words for the word div
    let words = new Map([
        ['fish', 'most common'],
        ['shark', 'dangerous sharp teeth'],
        ['whale', 'biggest mammal '],
        ['octopus', 'eight(8) tentacles'],
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
                let html = `<button class="alphabet">${i.toLowerCase()}</button>`;
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

    // check if the word is correct
    let checkWord = function(){
        let val = true;
        for (let i = 0; i < wordDiv.children.length; i++){
            if (wordDiv.children[i].textContent === '_'){
                val = false;
            }
        }
        return val;
    };
    
    //defining the index for the selected word  
    let getIndexes = function(letter){
        let indexes = [];
        [...select_word].forEach((val, i) => {
            if (val === letter) {
                let index = i;
                indexes.push(index);
            }
        }); 
        return indexes;
    };

    //notification
    let showNotification = function (msg) {
        notification.classList.remove('hidden');
        notificationSpan.textContent = select_word;
        notificationResults.textContent = `You ${msg}`;
    };

    // decrease life
    let decreaseLife = function () {
        lives--;
        livesSpan.textContent = lives;
        if (lives === 0) {
            showNotification('did not win!');
        }
    }; //console.log(select_word);    

     // pressing letters funtion
    let letterPress = function(){
        let letter = this.textContent.toLowerCase();

        if (select_word.includes(letter)){
            let indexes_list = getIndexes(letter);
            indexes_list.forEach((val, i) =>{
                wordDiv.children[val].textContent =this.textContent;
            });
            if(checkWord()) showNotification('Won!!!')
        }   else{
            decreaseLife();
        }
        this.classList.add('disabled');
    };
    
    letters.forEach(button =>{
        button.addEventListener('click',letterPress);
    });

    //Reset play again button
    resetButton.addEventListener('click', function() {
        init('reset');
    });  
    //need to add hint button
    hintButton.addEventListener('click', function(){
        hintDiv.classList.remove('hidden');
        textHint.textContent = words.get(select_word);

    })
}  
   


