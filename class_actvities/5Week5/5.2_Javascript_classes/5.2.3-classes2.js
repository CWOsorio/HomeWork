// refactor your Animal function constructor and methods to use the class keyword
class Animal {
    constructor(name, type, weight) {
        this.name = name;
        this.type = type;
        this.weight = weight;
    }
}

// extend the Animal class with a type of animal
class MaineCoon extends Animal {
    constructor(name, type, weight, hobbies)
    {
        super(name, type, weight);
        this.hobbies = hobbies;
    }
}
// add some unique methods and properties to the class extension
greet() {
    return `Meow! I am {this.name}, did you know that cats ar the best pets?` 
    }
}
// create an instance of the class extension and call one of its methods
const Smokey = new MaineCoon("Smokey", "MaineCoon", "7 lbs", "sleeping")
Smokey.greet()
