/////preventing object modification 
//////[[extensible]]

// Objects, just like properties, have internal attributes that govern their
// behavior. One of these attributes is [[Extensible]], which is a Boolean
// value indicating if the object itself can be modified. All objects you
// create are extensible by default, meaning new properties can be added to
// the object at any time. You’ve seen this several times in this chapter. By
// setting [[Extensible]] to false, you can prevent new properties from being
// added to an object.

/////2nd way sealing 

///The second way to create a nonextensible object is to seal the object. A
// sealed object is nonextensible, and all of its properties are nonconfigurable


///  sealing is a superset of extensible 

////That means not only can you not add new properties to the object,

// but you also can’t remove properties or change their type (from data to
// accessor or vice versa). If an object is sealed, you can only read from and
// write to its properties.

var p = {};

Object.defineProperty(p, "name", {
	value :"srini", 
	configurable : true, 
	enumerable : true,
	writable:true
});


console.log(Object.getOwnPropertyDescriptor(p, "name"));

console.log(Object.isExtensible(p)); //true
console.log(Object.isSealed(p));  // false

Object.seal(p);

console.log(Object.isExtensible(p)); //fa;se
console.log(Object.isSealed(p));  //true

console.log(Object.getOwnPropertyDescriptor(p, "name"));
//Object {value: "srini", writable: true, enumerable: true, configurable: false}

p.name = "vas";
console.log(p.name);  //vas  - coz writable is set to true 



delete p.name;

console.log(p.name);  //does not delete, ///vas

