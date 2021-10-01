const pizzaPlace = "Pizza Planet";
let numberOfToppings = 5;

console.log(pizzaPlace);
console.log(numberOfToppings);

console.log(typeof "pizzPlace");
console.log (typeof "numberOfToppings");

console.log(`${pizzaPlace} is an AWESOME pizza resturant that only has ${numberOfToppings} toppings!`)

if(numberOfToppings < 10){
console.log ("Quality, not quantity.");
}else {
  console.log("A whole lot of pizza");
}

for (let i = 1; i <= numberOfToppings; i++){
  if (i % 2 === 0) {
    console.log(i);
  }
}
