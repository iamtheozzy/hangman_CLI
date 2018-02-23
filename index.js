var Word = require("./word.js");
var inquirer = require('inquirer');
var prompt = require('prompt');

var guessesLeft = 10;

var wordBank = ["apple", "genius", "code", "random", "meth", "gangster", "america", "colombia", "version", "pokemon", "vegeta", "unicorn", "universal", "codingbootcamp", "developer","chicago", "mississippi"];

var randomWord = new Word(wordBank[Math.floor(Math.random() * wordBank.length) + 1]);

console.log(randomWord);

var startGame = function() {

  inquirer.prompt([{
      type: "input",
      name: "userGuess",
      message: "Guess a letter! "
    }])
    .then(function(response) {
        guessesLeft--;
        if(guessesLeft === 0){
          console.log("Out of guesses homie!!!")
        }
    });
}


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
