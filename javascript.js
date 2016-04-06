////moving on
//////PROPERTY attributes 

//// before ECMA5 , no way to specify wheterh a proerty is enumberable 
/// no way to access internal attributes of a property at al l 


/// learning about attributes of both data and accessor properties 

//// the common ones 

/// enumerable, configurable 

// There are two property attributes shared between data and accessor
// properties. One is [[Enumerable]], which determines whether you can
// iterate
// over the property. The other is [[Configurable]], which determines
// whether the property can be changed.


//configurable means you can delete that godammn property, add shit and all,  if it is not configurable you cannot do anything 


// If you want to change property attributes, you can use the Object
// .defineProperty() method.

var person = {
	name : "Srini", 
	age: 23
};

console.log(person);

// The Object.getOwnPropertyDescriptor() method returns a property descriptor for an own property (that is, one directly present on an object, not present by dint of being along an object's prototype chain) of a given object.

var obj1 = Object.getOwnPropertyDescriptor(person, "name");  /// returns an object 
console.log(obj1);  //Object {value: "Srini", writable: true, enumerable: true, configurable: true}

// now we will look at the age property
var obj2 = Object.getOwnPropertyDescriptor(person, "age");
console.log(obj2);  //Object {value: 23, writable: true, enumerable: true, configurable: true}

/// as you can see it has the value of 23, remember the key "Value"

var obj = Object.getOwnPropertyNames(person);  //// easier to use than using for in or the Object.keys 

console.log(obj);  //["name", "age"]