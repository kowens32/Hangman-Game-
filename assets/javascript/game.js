


//List of possible animals to spell
var safariAnimals = ["Lion", "Elephant", "Giraffe", "Leopard"];
var guessesLeft = 15;
var correctWord = ("_")*res.length;


//user selects a key to get started
document.onkeyup = function(event) {
    var userChoices = event.key;
//computer randomly selects an animal
    var computerAnimal = safariAnimals[Math.floor(Math.random() * safariAnimals.length)];

    console.log(computerAnimal);

//Computer has selected a Lion  and splits the string into individual characters

    var lion = "Lion";
    var res = lion.split("");
    var validChoices = ("res");
    console.log(res);

    console.log(userChoices);

}
//If user selects the same str.indexof as the computer than replace with a letter
    //Else capture letter below




//If user selects a choice that does not equal res.length than detract from guessesLeft
if (validChoices.indexOf(userChoices) > res.length) {
    guessesLeft--;

    var computerGuessSpan = document.getElementById("incorect");
    computerGuessSpan.innerHTML = userChoices;
}








