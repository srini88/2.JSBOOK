// primitive wrapper types 

// 3 of them string, number and boolean 

// to make working
// with primitive values as easy as working with objects

// The primitive wrapper types are reference types that are automatically
// created behind the scenes whenever strings, numbers,
// or Booleans
// are read.

var name = "srini";


var firstChar = name.charAt(0);  // The second line treats name like an object and
//calls charAt(0) using dot notation

console.log(firstChar);  //s


// behind the scenens

// var name = "Nicholas";
// var temp = new String(name);
// var firstChar = temp.charAt(0);
// temp = null;
// console.log(firstChar);


name.last = "pv";


console.log(name.last);  // undefined - wont work 