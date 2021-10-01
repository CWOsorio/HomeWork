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

function getPizzaOrder(size, crust, ...toppings) {
  let order = `One ${size} ${crust} crust pizza with `;
  for (let toppings of toppings){
    order += `${toppings},`;
  }
  console.log(`${order}.Coming up!);
  return [size, crust, toppings];
}
let customerOrder =
getPizzaOrder = getPizzaOrder("large",
 "thin",
 "sausage",
 "onions",
 "peppers"
 );

 function preparePizza(
   [orderSize, orderCrust,]) {
     console.log("...your pizza is being prepared...");
     return{
       size: orderSize,
       crust: orderCrust,
       toppings: orderToppings
     };
     }
     let cookedPizza = preparePizza (customerOrder);

     function servePizza(pizza){
       let orderReady = `Your tasty pizza order is ready! Your
       order was ${pizza.size} ${pizza.crust}`;
       for (let topping of pizza.toppings) {
         orderReady += `${topping}, `;

       }
       console.log('$orderReady}. Bon Apetite!');
       return pizza;
     }
     servePizza(cookedPizza);
   }
 )
}






