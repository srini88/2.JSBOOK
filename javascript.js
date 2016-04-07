///// freezing objects 

// The last way to create a nonextensible object is to freeze it. If an object is
// frozen, you can’t add or remove properties, you can’t change properties’
// types, and you can’t write to any data properties.

// In essence, a frozen object
// is a sealed object where data properties are also read-only. Frozen objects
// can’t become unfrozen,
// so they remain in the state they were in when
// they became frozen. You can freeze an object by using Object.freeze() and
// determine if an object is frozen by using Object.isFrozen().



var p = {};

Object.defineProperty(p, "name", {
	value :"srini", 
	configurable : true, 
	enumerable : true,
	writable:true
});


console.log(Object.getOwnPropertyDescriptor(p, "name"));

console.log(Object.isExtensible(p)); //true

Object.freeze(p);

console.log(Object.getOwnPropertyDescriptor(p, "name"));
//// after freezing writable and configurable are set to false
///Object {value: "srini", writable: false, enumerable: true, configurable: false}


console.log(Object.isExtensible(p)); //false
console.log(Object.isFrozen(p));  //true

console.log(p.name);  //// srini

p.name="vas";    //// now changing name to vas, since it is frozen (writable set to false) , this wont happen 


console.log(p.name);  /// name is still srini


