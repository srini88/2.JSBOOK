///moving on


var person = {
	name : "Srini", 
	age: 23
};
console.log(Object.getOwnPropertyDescriptor(person, "name"));


// Object {value: "Srini", writable: true, enumerable: true, configurable: true}


// changin  confgiurable to false 
Object.defineProperty(person, "name", {


	configurable : false

});
console.log(Object.getOwnPropertyDescriptor(person, "name"));

//Object {value: "Srini", writable: true, enumerable: true, configurable: false}

//// now lets change it back to true


Object.defineProperty(person, "name", {

	configurable : true

});

console.log(Object.getOwnPropertyDescriptor(person, "name")); ////Uncaught TypeError: Cannot redefine property: name

/// error can't change non configurable to configurable again 

// After that, name is changed to be nonconfigurable x. From now on,
// attempts to delete name fail because the property can’t be changed, so
// name is still present on person1

/// Effectively,
// name is locked down as a property on person1.


