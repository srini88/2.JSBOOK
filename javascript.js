var obj1 = {
	name : "Srinivas"
};
// adding a new method 
obj1.sayName = function(){
	console.log("name is  "+  this.name);
}


///////Removing properties 
// just as it can be addedc, they can be removed asw well 
// setting a property to null does not remove from the object completely 
/// remmeber it calls [[set]] with a value of nulll
/// only replaces the value of the property 

////// USE the DELETE operator to completely remove 

console.log("sayName" in obj1);  // true 
console.log(obj1);   // when printing this- you get triange 
delete obj1.sayName;

console.log("sayName" in obj1);  //false
console.log(obj1);  // here no triange means only name property exists, function is deleted 


//// delete works on a single object proerptyy

//// it called the internal operation named [[DELETE]]

// remvoes a key value pair from a hash table 
/// it returns true when successfull 
// some properties can t be removed 



