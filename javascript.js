//you can also create objects with a null [[Prototype]] via Object.creat() such as..

var nakedObject = Object.create(null);

console.log("toString" in nakedObject);  //false  //no shit exists
console.log("valueOf" in nakedObject); //false

var obj = {}


console.log("toString" in obj); //true //access to Object.prototype
console.log("valueOf" in obj); //true

//this nakedObject in this example is an object with no prototype chain..

///buit in methods wont be function...

///fucking blank slate..ghajini type...

/////see you can create a protype-less object...
