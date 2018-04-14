var random = Math.floor(Math.random()*words.length);
var guessWord = words[random];

var guessArr = guessWord.split("-");
console.log(guessWord);
console.log(guessArr);

function guess (random, guessWord, guessArr){

    this.random=random,
    this,guessWord=guessWord,
    this.guessArr=guessArr

};
