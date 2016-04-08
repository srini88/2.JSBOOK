
// When a property is read on an object, the JavaScript engine first
// looks for an own property with that name. If the engine finds a correctly
// named own property, it returns that value. If no own property with that
// name exists on the target object, JavaScript searches the [[Prototype]]
// object instead. If a prototype property with that name exists, the value
// of that property is returned. If the search concludes without finding a
// property with the correct name, undefined is returned.




var obj = {};

console.log(obj.toString());   //[object Object]



obj.toString = function() {
	return "[object Custom]";
}


////The own property shadows the prototype property,
//so the prototype property of the same name is no longer used


console.log(obj.toString());  //[object Custom]

console.log("toString" in obj);  //true
console.log(obj.hasOwnProperty("toString"));  //true

///deleting own property
console.log(delete obj.toString);  //treturns true deleted
console.log("toString" in obj);  //true  - got from its prototype
console.log(obj.hasOwnProperty("toString"));  //false



console.log(obj.toString());  //[object Object]  //// getting from prototype again 



// You cannot
// assign a value to a prototype property from an instance. As you can see
// in the middle section of Figure 4-2, assigning a value to toString creates a
// new own property on the instance, leaving the property on the prototype
// untouched.


// An object with no own properties (top) has only the methods of its prototype.