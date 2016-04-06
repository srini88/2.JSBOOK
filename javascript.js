//////Data propert attribuutes

//// data porperties possess two additional attributes that accesors do not
/// value
////The first is [[Value]], which holds the property value. This attribute is
// filled in automatically when you create a property on an object. All property
// values are stored in [[Value]], even if the value is a function.
// The second attribute is [[Writable]], which is a Boolean value indicating
// writable 


/// bby default all properties are writable 

var person = {
	name :"srini"
};

console.log(Object.getOwnPropertyDescriptor(person, "name"));
//// Object {value: "srini", writable: true, enumerable: true, configurable: true}

// you see both value and writable 
///// 2nd way of definignn the same object 

var person1 = {};

Object.defineProperty(person1, "name", {

	value : "srini"
});

console.log(Object.getOwnPropertyDescriptor(person1, "name"));
//// Object {value: "srini", writable: false, enumerable: false, configurable: false}, the others defaulted to false 

// When Object.defineProperty() is called, it first checks to see if the
// property exists. If the property doesn’t exist, a new one is added with
// the attributes specified in the descriptor. In this case, name isn’t already
// a property of person1, so it is created.