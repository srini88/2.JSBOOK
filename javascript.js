
var person1 = {
	_name:"Nichos", 

	get name(){
		console.log("reading name");
		return this._name;
	}
	// set name(value){
	// 	console.log("setting name %s", value);
	// 	this._name = value;
	
};

console.log(person1._name); //Nichos  ///without getting and setter
console.log(person1.name);

///reading name
//Nichos


// You don’t need to define both a getter and a setter; you can choose one or both.
// If you define only a getter, then the property becomes read-only, and attempts to
// write to it will fail silently in nonstrict mode and throw an error in strict mode.
// If you define only a setter, then the property becomes write-only, and attempts to
// read the value will fail silently in both strict and nonstrict modes.



// still I'm able to chage, didn't understand above para

person1._name ="srini";
console.log(person1._name);  //srini  - was able to change
console.log(person1.name);

// reading name
// srini