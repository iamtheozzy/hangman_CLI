var Letter = require('./letter.js');
var Word = require('./word.js')
var inquirer = require('inquirer');
var prompt = require('prompt');
var guessesLeft = 10;
var wordBank = ['han solo', 'kylo ren', 'chewbacca', 'luke skywalker', 'jabba the hut', 'boba fett', 'captain phasma', 'poe dameron']
var randomWord = new Word(wordBank[Math.floor(Math.random() * wordBank.length)]);
    //function to start game put the prompt in a function and pass through guesses left = 10
    startGame = function(guessesLeft){
        console.log("Welcome to Star Wars Hangman!");
        console.log("Guess a letter of the name of a Star Wars Character");
        console.log("-----------------------------");
        inquirer.prompt([
            {
              type: "input",
              name: "letterGuessed",
              message: "Guess a letter: "
          }])
          .then(function(inquirerResponse) {
              // var Ozzy = new Word("OZZY");
              // console.log(Ozzy.check("z"));
              // console.log(randomWord.check(inquirerResponse));
              // console.log(randomWord.string());
                for (var i = 0; i < randomWord.word.length; i++){
                    console.log(randomWord.word[i].char)
                    if (inquirerResponse.letterguessed===randomWord.word[i].char){
                      console.log("CORRECT! ");
                      console.log("You got it right! ");
                      console.log("\n Now guess the next word.");
                    } else {
                      guessesLeft--;
                      console.log("Try again")
                      console.log(inquirerResponse)
                      console.log("\n Guesses Left: " + guessesLeft);
                    }
                }
                // console.log(randomWord.word[i])
            })
    };
    startGame();
    //take inquirerResponse, which is the users input and compare that against all the letters in randomWord that was chosen
    //after we make comparison between inquirerResponse which is the users input and the letters in randomWord which is the words that were chosen then we are going to call out the function randomWord.compare(); pass through inquirerResponse (this is the parameter for our function b/c its what the user is typing in.)
    //random.compare takes care of the display it switches out the letter with the dash.
    //guesses left: everytime the user types in a wrong letter guesses left will decrease - guessesLeft--
    //then the game ends when a word is fully guessed or guessesleft = 0;
    //reset the game - calling out your start function again.
