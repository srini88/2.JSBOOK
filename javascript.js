////Constructor inheritance 

///object inheritance in JS is also the basis of constructor inheritance 

///every godammn function has a prototype property that can be modified or replaced..


///when you write the below function , 

function Person(){

}

///JS engine does this behind the scenes
////remember sets the constructor 
Person.prototype = Object.create(Object.prototype, {
	constructor :{
		value : Person,    ///see the value Person
		configurable: true,
enumerable: true,
writable :true

	}
});
//This code sets the construcots prototype property to an object that inherits from Object.prototype, which means any instances of Person also inherit from Object.prototype...


// Person is a subtype of Object and Object is a supertype of Person


///other shit
var obj = {

}


console.log(obj.prototype);  ///undefined 
//// where as when you use goadmman function
console.log(Person.prototype);   /////Person{} with triangle


console.log(Object.prototype.isPrototypeOf(Person));  ///true  - not sure about this

console.log(Object.prototype.isPrototypeOf(Person.prototype));  ///true  - this as expected  

console.log(Object.prototype);  //lots of shit