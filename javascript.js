///inhertance between two different objects...


var person1 = {
name : "srini",
sayName : function(){
	console.log(this.name);
}
};

///  right side is big one... person1 is the prototype of person2 
var person2 = Object.create(person1, {

	name :{
		value : "Vas", 
		configurable : true,
		enumerable : true, 
		writable : true
	}
});


person1.sayName(); //srini
person2.sayName();  //vas  - see person2 does not have sayName it got inhertited from person1 ...

console.log(person1.hasOwnProperty("sayName"));  //true
console.log(person1.isPrototypeOf(person2));   ///true ////left one is big..inside is small

console.log(person2.isPrototypeOf(person1));  //false/ ///not reverse like this

console.log(person2.hasOwnProperty("sayName"));   //false///inherited from right...does not contain it...


var prop;
for (prop in person2){
	console.log("prop is: " + prop  + "  value is: " + person2[prop]);
}

//for in prints both own properties and prototype properties...you got sayName below...

// prop is: name  value is: Vas
// javascript.js:36 prop is: sayName  value is: function (){
// 	console.log(this.name);
// }

var arr = Object.getOwnPropertyNames(person2);  //only fetches own properties
console.log(arr);  //got just ["name"] here...


////remmember this shit....

console.log(Object.prototype.__proto__ === null);   /////true //always Object.prototype ka proto points to nullllll

console.log(person2.__proto__);   ////points to person1 ///Object {name: "srini"}


console.log(person2.__proto__ === person1);   //true 

// That chain usually ends with
// Object.prototype, whose [[Prototype]] is set to null.