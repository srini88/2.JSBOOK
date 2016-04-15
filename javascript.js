///in traditional oo languages, classes inherit properties from other classess....

// In JS, inheritance,  occurs betweenobjects with no class like structure defining the relationship
// through rptotypes

// prototype chaining and Object.prototype


// Javascriopt built in approach for inheritance is called prototype chaining or prototypal inheritance 

// prototype properties are automatically available on object instances...
// which is form of inheritance...


// because the prototype is also an object, it has its own prototype and inherits from that... this is the prototype chain ....



// all generic shit inherit from Object.prototype

// any object defined via an object literal has its [[prototype ]] set to object.prototype 

var book  = {
	title: "HEE"    ///no semicolon here..just one propertty
};


var bookproto = Object.getPrototypeOf(book);

console.log(bookproto === Object.prototype);  ///true 

// means book automatically receives methods from Object.prototype 

// Shit that is on Object.prototype 

// hasOwnProperty(property)

// propertyIsEnumerable(prop

// 	getPrototypeOf(Object))
// valueOf()

// toString()

These methods appoear on all the objects through inheritance....