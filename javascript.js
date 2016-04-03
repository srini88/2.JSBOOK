

var arr = [2, 3, 4];

console.log(arr instanceof Array);  // true
console.log(Array.isArray(arr));  // true

//isArray is a method on Array 


console.log(Array.isArray([]));  // true
console.log(Array.isArray([1]));  // true
console.log(Array.isArray(new Array()));  //true

// below all false 

Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(17);
Array.isArray('Array');
Array.isArray(true);
Array.isArray(false);