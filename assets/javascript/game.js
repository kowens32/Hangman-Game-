

///Set variables to be used throughout the game
var safariAnimals = ["lion", "elephant", "giraffe", "leopard", "rhino", "flamingo", "wildebeest", "buffalo", "hippopotamus", "cheetah",];
var correctLetter = false;
var userwin = 0;
var computerAnimalSplit=[];
var dashesAndCorrectGuesses=[];
var incorrectLetters = [];




function newGame() {
    /////Assign null value to all variables
    computerAnimal = safariAnimals[Math.floor(Math.random() * safariAnimals.length)];
    guessesLeft = 15;
    incorrectLetters = [];
    correctLetter = false;
    dashesAndCorrectGuesses=[];
    //breaks computer selected animal into characters
    computerAnimalSplit = computerAnimal.split("");
    //Creates dashes from letters in computerAnimalSplit into a new array
    for (i = 0; i < computerAnimalSplit.length; i++) {
        dashesAndCorrectGuesses.push("_");
    }
    //writes the arrays to the DOM
    document.getElementById("currentWord").innerHTML = dashesAndCorrectGuesses.join(" ");
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("incorrect").innerHTML = incorrectLetters.join(" ");

}

newGame();

//user selects a key to get started
document.onkeyup = function (event) {
    var userChoices = event.key;

//checks to see if user has chosen the correct letter
    var correctLetter = false;
    for (i = 0; i < computerAnimalSplit.length; i++) {
        if (computerAnimalSplit[i] === userChoices) {
            correctLetter = true;
            dashesAndCorrectGuesses[i] = userChoices;
            //if user has selected correct choice, push letter to correct position in array
            document.getElementById("currentWord").innerHTML = dashesAndCorrectGuesses.join(" ");
        }
    }

    //If userchoice is not correct
    if (!correctLetter) {
//check if userchoice is not already within array, the subtract one from guesses left
        if (incorrectLetters.indexOf(userChoices) < 0) incorrectLetters.push(userChoices) && guessesLeft--;
        {
            document.getElementById("incorrect").innerHTML = incorrectLetters.join(" ");
            document.getElementById("guessesLeft").innerHTML = guessesLeft;
        }

        //Reset game if user uses all guesses
        if (guessesLeft === 0) {
            alert("Game over!");
            newGame();
        }
//user has won if user has filled the array with the same values as the computer choice
        if (dashesAndCorrectGuesses.toString() === computerAnimalSplit.toString()){
            //and one to user win and alert user
            userwin++;
            alert("You won!");
            document.getElementById("userWin").innerHTML = userwin;
            document.getElementById("currentWord").innerHTML = "";
            document.getElementById("guessesLeft").innerHTML = "";
            document.getElementById("incorrect").innerHTML = "";
            console.log("do i have words " + dashesAndCorrectGuesses);
            //reset game
            newGame();

        }

    }

}



//newGame();


// document.onkeyup = function(event) {
//     var userChoices = event.key;
// };












///match the corretc guess array with the dashesandcorrectguesses
/////https://stackoverflow.com/questions/3450593/how-do-i-clear-the-content-of-a-div-using-javascript


// //Prevent users from selecting same key twice
//     for (i = 0; i < incorrectLetters.length; i++) {
//         if (incorrectLetters[i] === userChoices); {
//            // alert("You've already picked this letter!");
//
//         }
//
//
// }





//IF correct, edit the DOM

//ELSE
// subract the number of guesses
//and edit the dom with the letters already placed


// if (correctLetter) {
//     for (i=0; i < computerAnimalSplit.length; i++) {
//      if (computerAnimalSplit[i] === correctLetter) {
//          dashesAndCorrectGuesses[i] = correctLetter;
//
//      }
//     }
// }














//If user selects letter that matches a letter in the array, replace dash with correct letter in the correct position

//var correctLetter = false;

// for (i=0; i < computerAnimalSplit.length; i++) {
//   //  console.log("we are in the last for loop ");
//     console.log(userChoices);
//     console.log("split "+computerAnimalSplit[i]);
//     if (computerAnimalSplit[i] === userChoices) {
//         console.log(userChoices);
//         console.log("split "+computerAnimalSplit[i])
//         correctLetter = true;
//     }
// }


//console.log(correctLetter);


// //If user selects a choice that does not equal computerAnimalSplit.length than subtract from guessesLeft
// if (validChoices.indexOf(userChoices) > computerAnimalSplit.length) {
//     guessesLeft--;
// //then capture the letter below
//     var incorrectUserChoice = document.getElementById("incorrect");
//     incorrectUserChoice.innerHTML = userChoices;
// }
//
//






