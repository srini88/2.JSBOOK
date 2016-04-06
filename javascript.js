///moving on




var person = {
	name : "Srini", 
	age: 23
};

//console.log(person);

console.log(Object.getOwnPropertyDescriptor(person, "name"));
//Object {value: "Srini", writable: true, enumerable: true, configurable: true}

// enumerable and cofigurale are set to true 

// now lets change them to false- you could change writable too
Object.defineProperty(person, "name", {


	enumerable: false, 
	configurable:false

});

console.log(Object.getOwnPropertyDescriptor(person, "name"));
// you could see the changes now 
//Object {value: "Srini", writable: true, enumerable: false, configurable: false} 

///// SINCE configurable is set to false 

console.log(delete person.name);  //false
console.log(person); // Object {age: 23, name: "Srini"} // still prints name 











