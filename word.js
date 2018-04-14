var words = [
  'T-h-e--L-i-o-n--K-i-n-g',
  'C-i-n-d-i-r-e-l-l-a',
  'P-e-t-e-r--P-a-n',
  'M-a-r-y--P-o-p-p-i-n-s',
  'L-a-d-y--a-n-d--t-h-e--T-r-a-m-p',
  'T-h-e--T-h-r-e-e--C-a-b-a-l-l-e-r-o-s',
  'A-l-i-c-e--i-n--W-o-n-d-e-r-l-a-n-d-s',
  'P-i-n-o-c-c-h-i-o',
  'F-a-n-t-a-s-i-a',
  "T-h-e--B-e-a-u-t-y--a-n-d--T-h-e--B-e-a-s-t"
];

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
