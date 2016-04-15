///////Naked object

///you can also create objects with a null [[prototype]] via Object.create()

var nakedObject = Object.create(null);

console.log("toString" in nakedObject);  //false
console.log("valueOf" in nakedObject); //false

///other generic Shit
var genericObj = Object.create(Object.prototype);

console.log("toString" in genericObj);  //true
console.log("valueOf" in genericObj); //true


////the nakedObject in this expample is an object with no prototype chain..
///means built in shit such as toString and valueOf arent present on the object..//this object is completely blank slate with no predefined properties...


// which makes it perfect for creating a lookup hash
// without potential naming collisions with inherited property names. There
// aren’t many other uses for an object like this, and you can’t use it as if it
// were inheriting from Object.prototype. For example, any time you use an
// operator on nakedObject, you’ll just get an error along the lines of “Cannot
// convert object to primitive value.” Still, it’s an interesting quirk of the
// JavaScript language that you can create a prototype-less object.