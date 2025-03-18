import "bootstrap";
import "./style.css";

 
let firstIngredient= ['Herring', 'Serrano ham', 'Smoked salmon', 'Snails'];
let secondIngredient = ['strawberry jam', 'Nocilla', 'Marmite', 'honey', 'castor oil'];
let thirdIngredient= ['watermelon', 'banana', 'durian fruit', 'rotten tomatoes'];
let fourthIngredient= ['salt', 'paprika', 'cinamon', 'coriander', 'sugar'];

//This function generates random numbers within the array's lenght
function randomGenerator(array){
  let randomPosition;
  randomPosition= array[Math.floor(Math.random()*array.length)];
  return randomPosition;
}
//This function gets the ingredients from the four arrays which correspond to the random positions generated
function ingredientGenerator(firstIngredient, secondIngredient, thirdIngredient, fourthIngredient) {
  let ingredients= "";
  ingredients= randomGenerator(firstIngredient)+ ", "+ randomGenerator(secondIngredient)+ ", " + randomGenerator(thirdIngredient) + " and " + randomGenerator(fourthIngredient);
  return ingredients;
}


let recipe=ingredientGenerator(firstIngredient, secondIngredient, thirdIngredient, fourthIngredient);
document.getElementById("recipe").innerHTML = recipe;
