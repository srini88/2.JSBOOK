///moving on


var person = {
	name : "Srini", 
	age: 23
};

//console.log(person);

console.log(Object.getOwnPropertyDescriptor(person, "name"));
//Object {value: "Srini", writable: true, enumerable: true, configurable: true}

// enumerable and cofigurale are set to true 


// If you want to change property attributes, you can use the Object
// .defineProperty() method. This method accepts three arguments: the
// object that owns the property, the property name, and a property descriptor
// object containing the attributes to set. The descriptor has properties
// with the same name as the internal attributes but without the square
// brackets. So you use enumerable
// to set [[Enumerable]], and configurable
// to set [[Configurable]].


// now lets change them to false- you could change writable too
Object.defineProperty(person, "name", {


	enumerable: false, 
	configurable:false

});

console.log(Object.getOwnPropertyDescriptor(person, "name"));
// you could see the changes now 
//Object {value: "Srini", writable: true, enumerable: false, configurable: false} 

/// lets deal with enumerable now 

var arr = Object.keys(person);
console.log(arr);  //["age"] /// because name is not enumerable
// checking it second way 

console.log(person.propertyIsEnumerable("name"));  /// false - not enumerable

console.log("name" in person);  //   true - still there but not enumerable












