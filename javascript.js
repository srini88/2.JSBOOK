// Defining Multiple Properties
// It’s also possible to define multiple properties on an object simultaneously
// Object.defineProperties()




var person = {

};

/// 2 args remember --- for defineProperty 3 args - the third arg being the property descriptor 

// This
// method accepts two arguments: the object to work on and an object containing
// all of the property information


// The keys of that second argument
// are property names, and the values are descriptor objects defining the
// attributes for those properties


//Object.defineProperties(person, "name") /// wrong // 2nd arg itself an object with keys and values 

Object.defineProperties(person, {
	// adding data property name and age
	name : {
		value :"srini", 
		enumerable : true, 
		configurable : true
		//writable : true
	}, 
	age :{
		value :25, 
		enumerable : true, 
		configurable : true,
		writable : true
	}
});

console.log(person);  //Object {name: "srini", age: 25}
console.log(Object.getOwnPropertyDescriptor(person, "name"));


person.name = "boo";   // writable is false, so cannot write to it
/// I thought it would work since configurable is set to true 
console.log(person.name);  // still prints srini


//Object {value: "srini", writable: true, enumerable: true, configurable: true}
console.log(Object.getOwnPropertyDescriptor(person, "age"));

//Object {value: 25, writable: true, enumerable: true, configurable: true}