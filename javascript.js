


// Javascript Book chapter 3 , understanding objects 

// mostly you create your own objects 
// objects in JS are dynamic - they can change any point during code execution

// different from class baded languages that lock down objects based on a class definition
// JS objects no fucking restriction

// 2 ways to create objects 1)object constructor and object literal 


// 1st way 
var obj  = new Object();

obj.name = "Srinivas";

console.log(obj);  //Object {name: "Srinivas"}

// 2nd way

var obj1 = {
	name : "Srinivas"
};

console.log(obj1);  //Object {name: "Srinivas"}


/////////detecting properties
// because properties can be added any time, better to check if property exists or not. 

if (obj1.name){
	console.log("exists");   // prints exists, but not right way to do it
}



// The if condition evaluates to true if the value is truthy (an
// object, a nonempty string, a nonzero number, or true) and evaluates to
// false if the value is falsy (null, undefined, 0, false, NaN, or an empty string).

// Because an object property can contain one of these falsy values, the
// example code can yield false negatives. For instance, if person1.age is 0,
// then the if condition will not be met even though the property exists.

////best approach to check is to use the "in " operator 
///we are basically checking to see if the given key exists in the hash table 

if ("name" in obj1){   // remember to use "" for properties 
	console.log("exists using in operator");   // true
}

console.log("title" in obj1);   //false
 
 ////now how will you check if a method exists 

obj1.sayName = function(){
	console.log("name is  "+  this.name);
}

console.log(obj1);  // added the function to the object 
// check the method using the "in " operator 

console.log("sayName" in obj1);  //true
console.log("sayName1" in obj1);  //false

// in most cases in operator is the best way to determine if the proerpty exists or not 
// it does not evaluate the value of the property, we dont want to evaluate like checking with the "if " right 

/// now want to check with the "in" operator if it is an own property or a protyotype property 

// in operator checks both
// use the hasOwnProperty() method, which exists on all objects and returns true only if the given property exists and is an own property 

console.log(obj1.hasOwnProperty("sayName"));  // "" here also   // true
////why hasOwnProperty is better than in 
/// ""in does both own and prototype properties 


console.log("sayName" in obj1);  // true
console.log(obj1.hasOwnProperty("sayName"));  // true 

console.log("toString" in obj1);   // true - this is the problem, toString is a prototype property - present on all objects 
console.log(obj1.hasOwnProperty("toString"));   // false, which is what we want 



