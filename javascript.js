////////constructors and prototypes

/// chapter 4

//// JS lacks classes, it turns to constructors and prototypes to bring a similar order to objects 


/// constructor - simply a function used with new to create an object 

/// many built in constructors such as Object, Array, Function
/// advantage of constructors is  that objects created with the same constructor contain the same properties and methods 


//// want multiple similar objects, you create your own constructors and therefore your own reference types 

//// construcotr is a function, you define it same way. .. .. 
/// first letter caps



function Person(){

}
// this Person constructor does not explicity return anything, both p1 and p2 are considered instances of the new Person type 

//// new operator automatically creates an object of the given type and returns it 

/// first way to check whether instance or not 
//// use instanceof operator to deduce an objects type 

var person1 = new Person;
var person2 = new Person;


console.log(person1 instanceof Person);  ///true
console.log(person2 instanceof Person);   ///true

console.log(person1 instanceof Object);  //true

console.log(Person instanceof Object);  //true
console.log(Person instanceof Function);  //true
console.log(person1 instanceof Function);  //false

//// 2nd way use constructor property 

// every object instance is automatically created with a constructor property... that contains a reference to the constructor function that created it 
console.log(person1.constructor === Person);  //true


console.log(person1.constructor);   ///function Person(){}

console.log(person1.constructor === Object);  ///false, only goes to the construcotr , not constructor's constructor 

console.log(Person.constructor);  ///function Function() { [native code] }

console.log(Function.constructor);  ///function Function() { [native code]  /// not sure, I thougth it would print Object