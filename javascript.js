///////Object inheritance 

///// the simplest type of inheritance is between objects....
/// you should specify what object should be the new objects [[prototype]]

////object literals have Object.prototype set as their [[prototype]] implicitly , 

///very imp
//// you can also explicity specify [[prototype]] property with the Object.create() method 


// Object.create() acceepts two arguments 
// first arg is the object to use for [[prototype]] in the new object 
// /// the optional second argument is an object of property descriptors in the same format used by Object.defineProperties 

// ///


var book = {
	title : "PHP book"
}

// is same as 

/// look second argument is the property descriptors
var book = Object.create(Object.prototype, {
	title :{
		value :"PHP book", 
		configurable :true, 
		writable : true, 
		enumerable : true 
	}
});

// The two declarations in this code are effectively the same. The first
// declaration uses an object literal to define an object with a single property
// called title. That object automatically inherits from Object.prototype,
// and the property is set to be configurable, enumerable, and writable by
// default. The second declaration takes the same steps but does so explicitly
// using Object.create(). The resulting book object from each declaration
// behaves the exact same way

///// ususally you dont write code that inherits from Object.prototype directly, because you got that shit by default...