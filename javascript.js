


/////how to determine if a godammn function is on the prototpye and not in the object instance

var person = {
	name :"srinivas", 
	age : 21
};


console.log("name" in person);  //true   //own property
console.log("toString" in person);  ///true //prototype property

console.log(person.hasOwnProperty("name"));   ///true
console.log(person.hasOwnProperty("toString"));  //false


// it is in prototype

// function to determine if a property is on the prototype
/// if it is in the prototype - returns true, else false
function determine(obj, prop){

	/// in lo undi  and  hasOwnProperty lo lekapothe - it is in prototype
	if ((prop in obj) && !(obj.hasOwnProperty(prop)))
		return true;

	return false;
}

// check if toString is in prototype , should return true 


console.log(determine(person, "toString"));  //true

// name is own, should return false 

console.log(determine(person, "name"));  //false






