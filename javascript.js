//// difference between configurable and writable 
/// these are called property description

// Writable: If false, the value of the property can not be changed.

// Configurable: If false, any attempts to delete the property or change its attributes (Writable, Configurable, or Enumerable) will fail.

// Enumerable: If true, the property will be iterated over when a user does for (var prop in obj){} (or similar).


var person = {
	name :"srini"
};

console.log(Object.getOwnPropertyDescriptor(person, "name"));
Object.defineProperty(person, "name", {
	writable :false
});

// changing to false 
console.log(Object.getOwnPropertyDescriptor(person, "name"));

console.log(Object.keys(person));  //["name"]


console.log(delete person.name);  // true 
//// this is deleted even though writable is set to false, 
/// in case of configurable you cannot delete it to o

/// writable is a subset of configurable 

console.log(Object.keys(person));  //[]