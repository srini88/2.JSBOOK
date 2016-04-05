


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

// Objects you
// create are always wide open for modification unless you specify otherwise
// (more on that in “Preventing Object Modification” on page 45).

// you got to prevent object modification

// when a property is first added to an object, JS uses internal method called [[put]] on that object. 
// same like adding key to a hash table 
// we are creating an own property name above, that indicates that the specific instance of the object owns that property 
// property stored directly on the instance, and all operations are performed through that object 

// above is own proerpy , there are two types of properties on an object 
// own properties
// prototype proerpties 

// when a new value is assigned to an existing property, [[set]] takes place instead of [[put]]  - since updating here. 