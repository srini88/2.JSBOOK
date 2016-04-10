
//// changing prototypes 

//// all instances of a particular type reference a shared prototype.... 
///the [[prototype]] property just contains a pointer to the prototype and any changes to the prototype are immediately available on any instance referencing it

//// literally add new mmeberts to a prototype at any point and ahve those changes reflected on existing instances 
/// same as the previous one

function Person(name) {
	this.name = name;
}
Person.prototype = {
	constructor: Person,
 	sayName: function() {
		console.log(this.name);
	},
 	toString: function() {
	return "[Person " + this.name + "]";
	}
};

var person1 = new Person("Nicholas");
var person2 = new Person("Greg");

console.log("sayHi" in person1);  ///not there in both person1 and 2 //false
console.log('sayHi' in person2);

//// lets add that sayHi to the prototype itself

Person.prototype.sayHi = function (){
	console.log("Hi");
};

person1.sayHi();
person2.sayHi();

console.log(person1.hasOwnProperty("sayHi"));   //false /// not own property/// as you can see it is on the Prototype property



