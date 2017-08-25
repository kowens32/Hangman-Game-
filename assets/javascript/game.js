



///target user choice so that it equals computeranimal
//computeranimal[i]=userchoice

/////https://www.w3schools.com/Jsref/jsref_includes.asp

//no
//List of possible animals to spell
var safariAnimals = ["lion", "elephant", "giraffe", "leopard", "rhino", "flamingo", "wildebeest", "buffalo", "hippopotamus", "cheetah",];
var guessesLeft = 15;
//var correctWord = ("_")*computerAnimalSplit.length;
var incorrectLetters = [];
//computer randomly generates an animal name
var computerAnimal = safariAnimals[Math.floor(Math.random() * safariAnimals.length)];
//computer splits the name of the animal into individual characters
var computerAnimalSplit = computerAnimal.split("");
console.log(computerAnimal);
var userChoices='';
var correctLetter = false;
var dashesAndCorrectGuesses=[];
var userwin = 0;
//create a new array
for (i = 0; i < computerAnimalSplit.length; i++) {
    dashesAndCorrectGuesses.push("_");
}
//user selects a key to get started
document.onkeyup = function(event) {

    /////////Start the function here??????\\\\\\
    var userChoices = event.key;
//computer randomly selects an animal
//     var computerAnimal = safariAnimals[Math.floor(Math.random() * safariAnimals.length)];
    // var computerAnimalSplit = computerAnimal.split("");
    var correctWord = computerAnimalSplit.length;
    console.log("correct word " + correctWord);
    //var dashesAndCorrectGuesses = [];
    // for (i = 0; i < computerAnimalSplit.length; i++) {
    //     dashesAndCorrectGuesses.push("_");
    // }
    console.log("dashes " + dashesAndCorrectGuesses);
    //Takes the current randomly generated word and turns it into dashes
    document.getElementById("currentWord").innerHTML = dashesAndCorrectGuesses.join(" ");


    console.log(computerAnimal);
    //  console.log(correctLetter);

    var validChoices = ("computerAnimalSplit");
    console.log("event function " + computerAnimalSplit);

    console.log("event function user choice " + userChoices);

    //Checking to see if letter chosen matches a character in the array
    var correctLetter = false;
    for (i = 0; i < computerAnimalSplit.length; i++) {
        if (computerAnimalSplit[i] === userChoices) {
            correctLetter = true;
            dashesAndCorrectGuesses[i] = userChoices;
            console.log("for loop " + userChoices);
            console.log("for loop split " + computerAnimalSplit[i])
            //console.log("for loop correct " + correctLetter);
        }
        console.log("for loop correct " + correctLetter);
    }


    if (!correctLetter) {
        // console.log("correct letter");
        // for (i = 0; i < computerAnimalSplit.length; i++) {
        //
        //     if (computerAnimalSplit[i] === userChoices) {
        //         dashesAndCorrectGuesses[i] = userChoices;
        //         //console.log("line 57 " + userChoices);
        //         //console.log("line 58" + dashesAndCorrectGuesses[i]);
        //         console.log("my arrary " + dashesAndCorrectGuesses);
        //         //  document.getElementById("correctWord");
        //         //textContent = userChoices;
        //     }
        //
        //
        // }

        // } else {
//if user choice is not in the incorrect letters array, push into array and detract one guess
        if (incorrectLetters.indexOf(userChoices) < 0) incorrectLetters.push(userChoices) && guessesLeft--;
        {

            document.getElementById("incorrect").innerHTML = incorrectLetters.join(" ");

            document.getElementById("guessesLeft").innerHTML = guessesLeft;
            // console.log("how many  " + guessesLeft);

        }

        console.log("what is this "+userwin);
        document.getElementById("userWin").innerHTML = userwin;

    }


}







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






