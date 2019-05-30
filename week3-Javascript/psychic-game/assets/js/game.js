var letters = ["a", "b", "c"];

// This array will hold guesses
var guessedLetters = [];

// This variable will be randomly assigned one of the three letters
var letterToGuess = null;

// count down
var guessesLeft = 9;

// counter for wins/losses
var wins = 0;
var losses = 0;

// Below created three functions to updateGuesses, updateGuessesLeft, and updateGuessesSoFar
var updateGuessesLeft = function() {
  // grab the HTML element and setting it equal to the guessesLeft.
  // (i.e. guessesLeft will get displayed in HTML)
  document.querySelector("#guesses-left").innerHTML = guessesLeft;
};

var updateLetterToGuess = function() {
  // get a random letterToGuess and assign it based on a random generator
  letterToGuess = letters[Math.floor(Math.random() * letters.length)];
};

var updateGuessesSoFar = function() {
  // take the guesses the user has tried -- display it as letters separated by commas.
  document.querySelector("#guesses-so-far").innerHTML = guessedLetters.join(", ");
};

// Function will be called when reset everything
var reset = function() {
  guessesLeft = 9;
  guessedLetters = [];
  updateLetterToGuess();
  updateGuessesLeft();
  updateGuessesSoFar();
};

// Execute on page load.
updateLetterToGuess();
updateGuessesLeft();

// This function will capture the keyboard clicks.
document.onkeyup = function(event) {
  // reduce the guesses by one
  guessesLeft--;

  // Lowercase the letter
  var letter = String.fromCharCode(event.which).toLowerCase();

  //  add the guess to the guessedLetters array
  guessedLetters.push(letter);

  // run the update functions
  updateGuessesLeft();
  updateGuessesSoFar();


  // check if there's a match.
  if (letter === letterToGuess) {

    // If win update the HTML to display the win.
    wins++;
    document.querySelector("#wins").innerHTML = wins;

    // reset the game
    reset();
  }

  // out of guesses...
  if (guessesLeft === 0) {

    // lose and update the HTML to display the loss.
    losses++;
    document.querySelector("#losses").innerHTML = losses;

    // call the reset.
    reset();

     // If out of guesses...
     if (guessesLeft === 0) {

       // lose and update the HTML to display the loss.
       losses++;
       document.querySelector("#losses").innerHTML = losses;

       // call the reset.
       reset();
     }
  }
};
