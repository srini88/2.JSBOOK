/////preventing object modification 
//////[[extensible]]

// Objects, just like properties, have internal attributes that govern their
// behavior. One of these attributes is [[Extensible]], which is a Boolean
// value indicating if the object itself can be modified. All objects you
// create are extensible by default, meaning new properties can be added to
// the object at any time. You’ve seen this several times in this chapter. By
// setting [[Extensible]] to false, you can prevent new properties from being
// added to an object.

// 3 wauys to achieve this 

// preventing extensions

// One way to create a nonextensible object is with Object.preventExtensions().
// This method accepts a single argument, which is the object you want to
// make nonextensible. Once you use this method on an object, you’ll never
// be able to add any new properties to it again. You can check the value of
// [[Extensible]] by using Object.isExtensible()



var p = {};

Object.defineProperty(p, "name", {
	value :"srini", 
	configurable : true, 
	enumerable : true,
	writable:true
});


console.log(Object.getOwnPropertyDescriptor(p, "name"));

console.log(Object.isExtensible(p));  // true //[[extensible set to true]]


Object.preventExtensions(p);
console.log(Object.isExtensible(p));  //false

/// now extensions are prevented 

//// try to add a new property 

p.sayName = function(){
	console.log("name is %s", this.name);
}

p.sayName();  ////Uncaught TypeError: p.sayName is not a function because we called preventExtensions above 


