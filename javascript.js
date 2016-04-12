
var person = {

};

//// ddefineProperties only 2 arguments - the second one being an object

Object.defineProperties(person, {

	name : {
		value:"Srini", 
		
		configurable :true, 
		writable :true

	}, 
	job: {
		value : "JS developer",
		enumerable :true, 
		configurable :true, 
		writable :true
	}
});


console.log(person);   //Object {name: "Srini", job: "JS developer"}



var keys = Object.keys(person);
console.log(keys);  //["name", "job"]

// now lets change enumerable to false on name, 
//// we will see with getOwnpropertyNames
var prop = Object.getOwnPropertyNames(person);
console.log(prop);  //["name", "job"]  - brints both even though enumerable is false on Name ---- know the difference now 


var desc = Object.getOwnPropertyDescriptor(person, "name"); ///this returns an object
console.log(desc);   //Object {value: "Srini", writable: true, enumerable: false, configurable: true}


var keys1 = Object.keys(person);

console.log(keys1); //["job"]  ///not printing name , because not enumerable


////////lets see prototpye and constructor

console.log(person.constructor);  ///function Object(){native shit}
console.log(person.prototype);  ////undefined now 