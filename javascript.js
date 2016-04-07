////constructors allow you to initialize an instance of a tuype in a consistent way.... performing all the property setup that is necessary before the object can be used...

//// you can also use Object.defineProperty() inside a constructor to helop initialize the instance 

function Person(name) {
Object.defineProperty(this, "name", {
get: function() {
return name;
},
set: function(newName) {
name = newName;
},
enumerable: true,
configurable: true
});
this.sayName = function() {
console.log(this.name);
};
}

// In this version of the Person constructor, the name property is an
// accessor
// property that uses the name parameter for storing the actual
// name. This is possible because named parameters act like local variables.