//////////Accessor property attributes 

//// no value or writable 
/// they have get and set which contain the getter and setter functions respectively

// As with the object literal form
// of getters and setters, you need only define one of these attributes to
// create
// the property.

// If you try to create a property with both data and accessor attributes, you will get
// an error.

// As with data properties, you can also specify whether accessor properties
// are configurable or enumerable

var person1 = {
_name: "Nicholas",
get name() {
console.log("Reading name");
return this._name;
},
set name(value) {
console.log("Setting name to %s", value);
this._name = value;
}
};


// the above can also be written as 

var person1 = {
_name: "Nicholas"
};
Object.defineProperty(person1, "name", {
get: function() {
console.log("Reading name");
return this._name;
},
set: function(value) {
console.log("Setting name to %s", value);
this._name = value;
},
enumerable: true,
configurable: true
});

// Notice that the get and set keys on the object passed in to Object
// .defineProperty() are data properties that contain a function. You can’t
// use object literal accessor format here.

// you can
// create
// a nonconfigurable, nonenumerable, nonwritable property

var person1 = {
_name: "Nicholas"
};

Object.defineProperty(person1, "name", {
get: function() {
console.log("Reading name");
return this._name;
}
});

console.log("name" in person1); // true
console.log(person1.propertyIsEnumerable("name")); // false
delete person1.name;
console.log("name" in person1); // true
person1.name = "Greg";
console.log(person1.name); // "Nicholas"

// In this code, the name property is an accessor property with only a
// getter
// u. There is no setter or any other attributes to explicitly set to true,
// so the value can be read but not changed.

// As with accessor properties defined via object literal notation, an accessor
// property
// without a setter throws an error in strict mode when you try to change the value. In
// nonstrict mode, the operation silently fails. Attempting to read an accessor property
// that has only a setter defined always returns undefined.