// functions as values 

// Because JavaScript has first-class functions, you can use them just as
// you do any other objects. You can assign them to variables, add them
// to objects, pass them to other functions as arguments, and return them
// from functions. Basically, you can use a function anywhere you would
// use any other reference value. This makes JavaScript functions incredibly
// powerful. 




// function sayHi(){
// 	console.log("Hi!");
// }


// sayHi();  //Hi


// var sayHi2 = sayHi;  // assigning function to a variable

// sayHi2();  //Hi

// both sayHi and sayHi2 are pointing to the same function means either can be executed with teh same result 


// functions are objects 

// you can pass a fn into another fn as an argument 


// sort() - accepts a comparison method as an optional parameter 
// this fn comparison is called whenever 2 values in the array must be compared 



// var arr = [3, 2, 1, 6, 10, 8];

// console.log(arr); //[3, 2, 1, 6, 10, 8]

// // in the sort - not using a comparison function 
// // in that case sort() converts every item to a string and then performs a comparison 
// // you cannot accrately sort an array of numbers without sepcifying a comparison function 


// var arr1 = arr.sort(); // also don't use arr1 just arr.sort(); does sorting inline 

// console.log(arr1); //[1, 10, 2, 3, 6, 8]
// console.log(arr); //[1, 10, 2, 3, 6, 8]  // does it inline too 


// now correct way 

var array1 = [3, 2, 1, 6, 10, 8];

function compare (num1, num2){
	return num1-num2;
}

//array1.sort(compare()); // wrong syntax - getting wrong results // dont use ()


array1.sort(compare);
console.log(array1);  //[1, 2, 3, 6, 8, 10]


//aother way of writing 


var array2 = [3, 2, 1, 6, 10, 8];

var comp2 = function (num1, num2){
	return num1-num2;
};



array2.sort(comp2);
console.log(array2);  //[1, 2, 3, 6, 8, 10]

//the default comparison converts all
//values to strings before comparing them.


// The sort() method sorts the items of an array.

// The sort order can be either alphabetic or numeric, and either ascending (up) or descending (down).

// By default, the sort() method sorts the values as strings in alphabetical and ascending order.

// This works well for strings ("Apple" comes before "Banana"). However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

// Because of this, the sort() method will produce an incorrect result when sorting numbers.

// You can fix this by providing a "compare function" (See "Parameter Values" below).

// Note: This method changes the original array.


var arr3 = ["apple", "choco", "banana", "banyan"];

arr3.sort();

console.log(arr3);  // correct ["apple", "banana", "banyan", "choco"] in case of strings 


// when using compare function on an array of strings, I'm getting wrong results - so dont use compare for strings, only for integers 

var arr4 = ["apple", "choco", "banana", "banyan"];

arr4.sort(function (first, second){
	return first-second;
});

console.log(arr4); //["apple", "choco", "banana", "banyan"]



// for descending order use return b-a



