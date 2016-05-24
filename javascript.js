
var Person = function(){

	this.name = "srini";
	this.age = 21;
}

console.log(Person.prototype)  //empty object..no shit added

//problem with this here
Person.prototype = {

	sayName : function(){
		console.log("Saying name");
	},
	tellMore :function(){
		console.log("telling more");
	}

}


console.log(Person.prototype)  //above 2 methods will be there

var p1 = new Person;


console.log(p1.constructor)  //going to Object...main obj
console.log(p1.constructor === Person)  //getting false, because we fucked up prototype 

console.log(p1.constructor === Object)  //true..went to main obj
