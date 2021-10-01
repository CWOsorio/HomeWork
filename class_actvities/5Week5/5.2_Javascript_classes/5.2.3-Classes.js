// refactor your Animal function constructor and methods to use the class keyword
class Animal {
    constructor(name, type, weight){
    this.name = name;
    this.type = type;
    this.weight = weight;
    }
}
// extend the Animal class with a type of animal
class Animal extends CategoryAnimal {
    constructor(name, type, weight) {
    super(name, type, weight);
    this.color =color;
}
// add some unique methods and properties to the class extension
greet() {
    return `Meow! I am {this.name}, did you know that cats are the best pets`
}
}
// create an instance of the class extension and call one of its methods
 