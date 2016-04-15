
function Person(name){
	this.name = name;
}


var p1 = new Person("srini");



console.log(p1.name);

var p1proto = Object.getPrototypeOf(p1);

console.log(p1proto);
console.log(Person.prototype);

console.log(p1proto === Person.prototype);  //true

console.log(p1.isPrototypeOf(Person));  //false

console.log(Person.prototype.isPrototypeOf(p1));  //true 

console.log(p1.isPrototypeOf(Person.prototype));  //false - its the other way round as above 





var obj = {

}

console.log(Object.prototype.isPrototypeOf(obj));   //true

console.log(obj.isPrototypeOf(Object.prototype));  //false - not this way, other way round 

