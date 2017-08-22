


//List of possible animals to spell
var safariAnimals = ["Lion", "Elephant", "Giraffe", "Leopard"];



document.onkeyup = function(event) {
    var userChoices = event.key;
//randomly select an animal
    var computerAnimal = safariAnimals[Math.floor(Math.random() * safariAnimals.length)];

console.log(computerAnimal);

var lion = "Lion";
var res = lion.split("");

console.log(res);

console.log(userChoices);


}


