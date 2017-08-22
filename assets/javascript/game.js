


//List of possible animals to spell
var safariAnimals = ["lion", "elephant", "giraffe", "leopard", "rhino", "flamingo", "wildebeest", "buffalo", "hippopotamus", "cheetah",];
var guessesLeft = 15;
//var correctWord = ("_")*computerAnimalSplit.length;

var computerAnimal = safariAnimals[Math.floor(Math.random() * safariAnimals.length)];
var computerAnimalSplit = computerAnimal.split("");
console.log(computerAnimal);
var userChoices='';
var correctLetter = false;

//user selects a key to get started
document.onkeyup = function(event) {
    var userChoices = event.key;
//computer randomly selects an animal
//     var computerAnimal = safariAnimals[Math.floor(Math.random() * safariAnimals.length)];
   // var computerAnimalSplit = computerAnimal.split("");
    var correctWord = computerAnimalSplit.length;
    console.log("correct word "+correctWord);
    var dashesAndCorrectGuesses = [];
    for (i = 0; i < computerAnimalSplit.length; i++) {
        dashesAndCorrectGuesses.push("_");
    }
    console.log("dashes " +dashesAndCorrectGuesses);
    document.getElementById("currentWord").innerHTML = dashesAndCorrectGuesses.join(" ");



    console.log(computerAnimal);
  //  console.log(correctLetter);
//Computer has selected a Lion  and splits the string into individual characters

    // var computerAnimalSplit = computerAnimal.split("");
    var validChoices = ("computerAnimalSplit");
    console.log("event function " +computerAnimalSplit);

    console.log("event function user choice " +userChoices);
    var correctLetter = false;
    for (i=0; i < computerAnimalSplit.length; i++) {
        if (computerAnimalSplit[i] === userChoices) {
            correctLetter = true;
            console.log("for loop " + userChoices);
            console.log("for loop split " + computerAnimalSplit[i])
            //console.log("for loop correct " + correctLetter);
        }
        console.log("for loop correct " + correctLetter);
    }


}











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






