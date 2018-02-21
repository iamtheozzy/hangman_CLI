var Word = require("./word.js");
var inquirer = require('inquirer');
var prompt = require('prompt');

var guessesLeft = 10;

var wordBank = ["apple", "genius", "code", "random", "meth", "gangster", "america", "colombia", "version", "pokemon", "vegeta", "unicorn", "universal", "codingbootcamp", "developer","chicago", "mississippi"];

var randomWord = new Word(wordBank[Math.floor(Math.random() * wordBank.length) + 1]);


var startGame = function(){

    console.log(randomWord);

    if(guessesLeft > 0){
      inquirer.prompt([
          {
            type: "input",
            name: "userGuess",
            message: "Guess a letter! "
          }
      ])
      .then(function(response) {
          if(console.log(randomWord.string() === randomWord.string())){
            console.log("You guessed right!!");
            console.log(randomWord.check(response.userGuess));
            console.log(guessesLeft);
            startGame();
            console.log("true");
          } else {
            console.log("WRONG!!!!!");
            console.log(randomWord.check(response.userGuess));
            guessesLeft--;
            console.log(guessesLeft);
            startGame();
            console.log("false");
          };
        });
    } else {
        console.log("GAME OVER SON!!! Try some other time!")
    };
};


  inquirer.prompt([
      {
        type: "confirm",
        name: "readyStart",
        message: "Are you ready to start guessing!?"
      }
  ])
  .then(function(response) {
      if(response.readyStart){
        startGame();
      } else {
        console.log("ok...Why did you even run this program then?")
      };
    });
