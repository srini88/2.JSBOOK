

var object = new Object();

//console.log(object);  //Object {}


//console.log(Object);

// prints function Object() { [native code] }
//console.log(Object());  // Object {}


// here object variable does not store the object directly into the variable 
// as it is a reference type 
// it holds the pointer to the location in memory where the object exists 

// this is the difference between objects and primitive types 

// primitive is stored directly in the variable 


// When you assign an object to a variable, you’re actually assigning a
// pointer. That means if you assign one variable to another, each variable
// gets a copy of the pointer, and both still reference the same object in
// memory. For example:



var obj1 = new Object();

obj1 = {
	name: "srini",
	year: 2010

};

obj2 = obj1;


// console.log(obj1);  //Object {name: "srini", year: 2010}
// console.log(obj2);  //Object {name: "srini", year: 2010}


obj2.name = "manik";

// console.log(obj1);  //Object {name: "manik", year: 2010}   // changed here in obj1 even though I only changed the value in obj2 
// console.log(obj2);  //Object {name: "manik", year: 2010}



obj1.myCustomProperty = "awesome";

console.log(obj1);   //Object {name: "manik", year: 2010, myCustomProperty: "awesome"}
console.log(obj2);  //Object {name: "manik", year: 2010, myCustomProperty: "awesome"}

// myCustomProperty is added to object1. that is also accesible through obj2 as both obj1 and obj2 point to the same object 


// see you are modifying objects on the go And there are ways to prevent such modifications, as you’ll learn later in this book.