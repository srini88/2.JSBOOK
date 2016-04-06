////TYPES OF PROPERTIES 


////1) data properties
// 2) accessor properties 

// data properties contain a value like name proerty aove 
/// default value of [[put ]] method is to create a data property 
//// so far we have dealt with data properties 


/// accesor proerties dont contain a value but instead define a function to call when the property is read... called a getter 
//// and a functionn to call when the property is written to - called a setter 
//// Accessor properties only require either a getter or a setter, though they can have both 



//// syntax to define an accessor property using object literal 

// below get name and set name are accesor properties 
/// used both getter and setter accessor property
var person1 = {
	_name:"Nichos", 

	get name(){
		console.log("reading name");
		return this._name;
	},
	set name(value){
		console.log("setting name %s", value);
		this._name = value;
	}
};

console.log(person1._name); //Nichos  ///without getting and setter
console.log(person1.name);
// reading name
// Nichos

person1.name = "Greg";  // prints setting name Greg without console.log
console.log(person1.name);  // Greg  (using accessor name)
console.log(person1._name);  // greg  (using proerty _name)



// we are defining an accesor proerty called name, data property is _name that contains the actual value of the property..
//// see getter and setter look like functions, but we are not using the function keyword
// The special keywords get
// and set are used before the accessor property name, followed by parentheses
// and a function body

/// this behaviour or creating  adds logging to the behavior of property..
// these accesor properties are usefull when you want the assignment of a value to trigger some sort of behaviour 


////