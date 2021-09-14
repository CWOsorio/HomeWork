let pizzaToppings = ["Sausage", "Pepperoni", "Green Peppers", "Red Onions"];

function welcome() {
  return `Welcome ${name}!`;
}
function greetCustomer(callback) {
  const name = promt ("Please Enter Your Name: ");
  alert(callback(name));

}
greetCustomer(welcome)

console.log(`We have an array of fresh toppings that include,
${pizzaToppings}! Our toppings list is small but AMAZING!`);

function getPizzaOrder(size, crust, toppings) {
  
}






