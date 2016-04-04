// object methods 
// you can add and remove properties from objecta at any time 

// when a property value is a function, the property is considered a method 

var person = {

	name :"srini",
	sayName : function(){
		console.log(person.name);   // using person.name instead of this.name
		// using person.name creates a tight coupling between the method and the object 
		// not good. 
		// if you change the variable name, you also need to change the reference to that name in the method 
		// hard to use the same function for different objects 


	}


};

person.sayName();  // Srini
person.sayName("boo");  // still Srini  // boo is getting discarded in the function
// to get around using person.name above 
// every scope in JS has a this object that represents the calling object for the function 

// in the global scope, this represents the global object (window in web browsers)

// when a function is called while attached to an object, the value of "this" is equal to that object by default 

// rewriting code with thsi 
var person1 = {

	name :"srinivas",
	sayName : function(){
		console.log(this.name);   // using this.name.
		
	}, 
	setName : function (naam){
		this.name = naam;
	}
};


person1.sayName();  // srinivas


// simply trying out 
var person4 = person1;   // this does shallow copy, both point to same variable object that points to the same storage location in memory 

person4.sayName();  // srinivas

person4.setName("viswanath");  // chaning the per4 name to viswanath
// this affects person1 name too as they both point to the samw location

person4.sayName();  // viswanath 
person1.sayName();  // viswanath 

