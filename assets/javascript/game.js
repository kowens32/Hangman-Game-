


//List of possible animals to spell
var safariAnimals = ["lion", "elephant", "giraffe", "leopard", "rhino", "flamingo", "wildebeest", "buffalo", "hippopotamus", "cheetah",];
var guessesLeft = 15;
//var correctWord = ("_")*computerAnimalSplit.length;


//user selects a key to get started
document.onkeyup = function(event) {
    var userChoices = event.key;
//computer randomly selects an animal
    var computerAnimal = safariAnimals[Math.floor(Math.random() * safariAnimals.length)];
    var computerAnimalSplit = computerAnimal.split("");
    var correctWord = computerAnimalSplit.length;
console.log("correct word "+correctWord);
var dashesAndCorrectGuesses = [];
    for (i = 0; i < computerAnimalSplit.length; i++) {
        dashesAndCorrectGuesses.push("_");
    }
    console.log("dashes " +dashesAndCorrectGuesses);
 document.getElementById("currentWord").innerHTML = dashesAndCorrectGuesses.join(" ");



    console.log(computerAnimal);

//Computer has selected a Lion  and splits the string into individual characters

   // var computerAnimalSplit = computerAnimal.split("");
    var validChoices = ("computerAnimalSplit");
    console.log(computerAnimalSplit);

    console.log(userChoices);

}
//If user selects the same str.indexof as the computer than replace with the letter

// var lionChoices = ["l", "i", "o", "n"]
//    if (userChoices !== -1) and (userChoices < computerAnimalSplit.length)
//       userChoices[computerAnimalSplit]=event.key;


// //If user selects a choice that does not equal computerAnimalSplit.length than subtract from guessesLeft
// if (validChoices.indexOf(userChoices) > computerAnimalSplit.length) {
//     guessesLeft--;
// //then capture below
//     var incorrectUserChoice = document.getElementById("incorrect");
//     incorrectUserChoice.innerHTML = userChoices;
// }
//
//






