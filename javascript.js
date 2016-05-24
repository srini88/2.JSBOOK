// var Person = {
// 	name : "srini",
// 	age :21
// }



// var p1 = new Person;  //this does not work..Person has to be a constructor function./..

var Person = function(){

	this.name = "srini";
	this.age = 21;
}

var p1 = new Person;

console.log(Object.getPrototypeOf(p1) === Person)  //false
console.log(Object.getPrototypeOf(p1) === Person.prototype)  //true

console.log(p1.constructor === Person)  //true