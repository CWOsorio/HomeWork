// create a function constructor that works as a template for an Animal
function Animal(name, type, weight);

// include properties for name, type, weight, etc.
this.name = name;
this.type = type;
this.weight = weight;

// create a new instance on an Animal
const Smokey = new Animal("Panther", [Persian, "5 pounds"]);

// add methods to the Animal prototype
Animal.prototype.greet = function() {
    return `Meow are you today? I am, ${this.name}`
}
// attach a method directly to the Animal instance that "overwrites" a prototype method
panther.greet = function(){
    return `Yes, cats are better that dogs, thanks for asking`
};
console.log(panther.greet);

