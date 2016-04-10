///// what happens if you add method to prototype and the instance is sealed

///sealed and frozen objects 
/// when using Object.seal or Object.freeze on an object .. you are acting soleely on the object instances and the own propertyies
//// you cant add new own properties or change existing own propertioes on frozen objects
/// but you can certainly still add properties on the prototupe and continue extending those  objects 


function Person(name) {
	this.name = name;
}

var person1 = new Person("Nicho");
var person2 = new Person("Greg");


Object.freeze(person1);

Person.prototype.sayHi = function(){
	console.log("Hi");
};

person1.sayBoo = function(){
	console.log("sayBoo");
}
person1.sayHi();  //hi  - still outputs Hi eventhoug frozen
person1.sayBoo();  ///Uncaught TypeError: person1.sayBoo is not a function //// cannot add on teh instance itself if frozen, but can add on the prototype
person2.sayHi(); //hi 



/// when adding sayHi to the prototype, both person1 and person2 attain a new method, --- seemingly contradicting person1's frozen status 

/// the [[prototype]]property is considered an own property of an instance, and whiel the property itself is frozen, the value (an object) is not

