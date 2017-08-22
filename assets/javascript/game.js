


//List of possible animals to spell
var safariAnimals = ["Lion", "Elephant", "Giraffe", "Leopard"];


document.onkeyup = function(event) {
//randomly select an animal
    var computerAnimal = safariAnimals[Math.floor(Math.random() * safariAnimals.length)];

console.log(computerAnimal);

var lion = "Lion";
var res = lion.split("",4);

console.log(res);

}


