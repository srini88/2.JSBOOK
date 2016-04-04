
var person1 = {

	name :"srinivas",
	sayName : function(){
		console.log(this.name);   // using this.name.
		console.log(this);  // prints Object with name srinivas

	}, 
	setName : function (naam){
		this.name = naam;
	}
};

person1.sayName();  // srinivas

// declaring function outside 

function sayName(){
	console.log(this.name);     // pussy
	console.log(this);   // prints Window // called on Window object - as name is outside and belongs to window scope 
}

var name = "pussy";

sayName();



