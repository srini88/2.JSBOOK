////moving on

///not all properties  are enumerable 

// of the native methods on objects have their [[Enumerable]] attribute set
// to false. You can check whether a property is enumerable by using the
// propertyIsEnumerable()



// [[enumerable]]

// propertyIsEnumerable()

var obj ={
	name : "srini", 
	age : 21
};


console.log(obj.propertyIsEnumerable("name"));    ///true
console.log(obj.propertyIsEnumerable("age"));			// true

// most of the native methods it is not enumerable 
// custom properties like above are enumerable 


///// Lets see one that is not enumerable 

var keys = Object.keys(obj);

console.log("length" in keys);  // true  /// length exists in keys array

console.log(keys.propertyIsEnumerable("length"));  // false, native shit

// IT IS a built in property on Array.prototype....
/// many native properties are not enumerable 
 



