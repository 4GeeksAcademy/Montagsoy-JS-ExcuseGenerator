import "bootstrap";
import "./style.css";

 
let first= ['Herring', 'Serrano ham', 'Smoked salmon', 'Snails'];
let second = ['strawberry jam', 'Nocilla', 'Marmite', 'honey', 'castor oil'];
let third= ['watermelon', 'banana', 'durian fruit', 'rotten tomatoes'];
let fourth= ['salt', 'paprika', 'cinamon', 'coriander', 'sugar'];

//generates random numbers
function randomGenerator(array){
  let randomPosition;
  randomPosition= array[Math.floor(Math.random()*array.length)];
  return randomPosition;
}

function ingredientGenerator(first, second, third, fourth) {
  let ingredient= "";
  ingredient= randomGenerator(first)+ ", "+ randomGenerator(second)+ ", " + randomGenerator(third) + " and " + randomGenerator(fourth);
  return ingredient;
}


let recipe=ingredientGenerator(first, second, third, fourth);
document.getElementById("recipe").innerHTML = recipe;
