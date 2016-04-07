////////constructors allow you to configure object instances with the same properties, 

//// but constructors alone dont eliminate code redunndancy

//////// each instance has had its own sayName even though sayName() does not change..

///// say name is same right...
/////if you have 100 instances of an object, then there are 100 copies of sayName that do exact same thing, with different data..

/////more efficient if all the instances shared one method
///// making all the instances share one method
///// that method method couold use this.name to retrive the appropriate data...


//////SO USE GODAMMN prototypes

////PROTOTYPE - recipe for an object...
//////almost every fn with the exceptin of some built in functions has a prototype property that is used during the creating of new instances 



////////THis prototype property is common (shared for all instances ) only one.... not one for each instance - this is the difference

///That prototype is
// shared among all of the object instances, and those instances can access // properties of the prototype


////hasOwnProperty() medhot is defined on the generic Object prototpy e, but it can be accessed from any object as if it were an own proper



var person ={
	name : "srinivas",
	age : 25
};

console.log("name" in person);  //true
console.log("hasOwnProperty" in person);  //true  //in operator returns true for both prototype and own properties

console.log(person.hasOwnProperty("hasOwnProperty"));  //false


console.log(person.hasOwnProperty("name")); //true
console.log(person.hasOwnProperty("age"));  //true
console.log(person.constructor);  // pointing to generic object, function Object() { [native code] }
 
console.log(Object.prototype);  ///this is very impppppp,you can see a top of stuff defined in teh object.prototype......these functions can be used by  dumb instances......like we are using hasOwnProperty and all

// Object{}
// _defineGetter__: __defineGetter__()
// __defineSetter__: __defineSetter__()
// __lookupGetter__: __lookupGetter__()
// __lookupSetter__: __lookupSetter__()
// constructor: Object()
// hasOwnProperty: hasOwnProperty()
// isPrototypeOf: isPrototypeOf()
// propertyIsEnumerable: propertyIsEnumerable()
// toLocaleString: toLocaleString()
// toString: toString()
// valueOf: valueOf()
// get __proto__: get __proto__()
// set __proto__: set __proto__()
console.log("HI");

// looking to see if the person prototype has some shit
console.log(person.prototype);   //undefined
/////nothing in the person.prototype coz we didnt define anything

console.log(Object.prototype.hasOwnProperty("hasOwnProperty"));  //true

console.log(Object.prototype.hasOwnProperty("toString")); //true