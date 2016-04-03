// identifying reference types 

// typeof on a function returns function 


var obj = {};


console.log(typeof obj);  //object 

var arr = [];

console.log(typeof arr);  //object - array is kindof object 


function srini(){

	return 1;
}

console.log(typeof srini);   //function - remmeber no paranthesis for fn


// for all reference types other than functions, typeof returns object 
// istenad use instanceof 


// instanceof takes two - one before and one after - before is the name of the object you wanna check - after is the constructor name like Object , array etc 


console.log( srini instanceof Function);    // true
console.log( srini instanceof Object);    // true  , not sure why it returns true 

console.log(obj instanceof Object);  // true


console.log(arr instanceof Object);  // true  - everything is an instance of object I guess 

// The instanceof operator can identify inherited types. That means
// every object is actually an instance of Object because every reference type
// inherits from Object.


console.log(arr instanceof Array);   // true