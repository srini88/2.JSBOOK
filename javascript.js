///// now we will create an object /// with data and accessor properties using defineProperties method 

var person1 = {};
Object.defineProperties(person1, {
 // data property to store data
_name: {
value: "Nicholas",
enumerable: true,
configurable: true,
writable: true
},
// accessor property
name: {
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
}
});

// This example defines _name as a data property to contain information
// and name as an accessor property. You can define any number
// of properties using Object.defineProperties();
// you can even change existing
// properties and create new ones at the same time. The effect is the same
// as calling Object.defineProperty()
// multiple times.
