
/// constructor and prootype 
function Person(){
	this.sayName = function(){
		console.log("HELLO");
	}
}

var p1 = new Person;
var p2 = new Person;


Person.prototype.fav = [];
Person.prototype.obj = {};
Person.prototype.Hello  = function(){
	console.log("HI");
}

p1proto = Object.getPrototypeOf(p1);
console.log(p1proto);  //Person {fav: Array[0], obj: Object}   -- this is Person.prototype ---not just Person - remmember 

console.log(p1.constructor);  /// this constructor points to the Person...not the [[Prototype]] property 
console.log(p1.constructor === Person);  //// trtue /// constructor check 



console.log(Person.prototype);   ////Person {fav: Array[0], obj: Object}
console.log(p1proto == Person.prototype);   ////true - we are pointing to the Person.prototype ... [[prototype]] points to Person.prototype



