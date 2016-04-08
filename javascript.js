///////Using prototypes with constructors 

//////the shared nature of protopes makes them ideal for defining methods once for all objects of a given type

/////// methods tend to do the sma ething for all instances (instance properties may be different, something like sayName is same for all instances ), theere is no reason each instance needs its own set of methods 

///// much more efficient to put the methods on the prototype and then use "this" to access the current instance....


function Person(name){
	this.name = name;
}

//// defining sayName on the prototype instead of in the constructor...
/////because person1 and person2 are  each base references for their calls to sayName(), the "this" value is assigned to person1 and person2 respectively
Person.prototype.sayName = function(){
	console.log(this.name);
};

var person1 = new Person("srini");
var person2 = new Person("vas");

console.log(person1.name);  //srini
console.log(person2.name); //vas

person1.sayName(); //srini
person2.sayName(); ///vas


console.log(person1 instanceof Person);  //true
console.log(Person instanceof Function);  //true

console.log(person1.constructor);   //function Person(mame {})

console.log(person1.constructor === Person);  ///points to the constructor Person

var person1proto = Object.getPrototypeOf(person1);

console.log(person1proto ===Person.prototype);   ///true


//////// above on the godammn prototype we added a method ,  which is the same godammn method for both the instances ,,, no two copies ....