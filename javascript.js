////looking at reduce...

////another higher order function reduce...

///what is reduce?
///reduce is the multitool of transformations...



var orders = [1, 2,3,4];
////very very importnat....

// The first time the callback is called, previousValue and currentValue can be one of two values. If initialValue is provided in the call to reduce, then previousValue will be equal to initialValue and currentValue will be equal to the first value in the array. If no initialValue was provided, then previousValue will be equal to the first value in the array and currentValue will be equal to the second.


//not giving initial value...


// The value returned by reduce would be that of the last callback invocation (10).

var totalAmount = orders.reduce(function(prev, current){
	console.log("previous: " +prev + " current:  "+current);
	return prev + current;
}); 

console.log(totalAmount);

///now lets give initial value....

var totalAmount1 = orders.reduce(function(prev, current){
	console.log("previous: " +prev + " current:  "+current);
	return prev + current;
}, 5); 

console.log(totalAmount1);


// previous: 5 current:  1
// previous: 6 current:  2
// previous: 8 current:  3
// previous: 11 current:  4
// 15

var total = [0, 1, 2, 3].reduce(function(a, b) {
	console.log (a, b);
  return a + b;
});

console.log(total);   //0+1  //1+2  ///3 + 3    //answer 6


//flatten a godammn array...
var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {

	console.log(a, b);
  return a.concat(b);
}, []);
// flattened is [0, 1, 2, 3, 4, 5]


console.log(flattened);

///as expected. - we passed an initialvalue of [] so a for first iteration will be []
// [] [0, 1]
// [0, 1] [2, 3]
// [0, 1, 2, 3] [4, 5]
// [0, 1, 2, 3, 4, 5]

console.log("boo");
//flatten a godammn array...
var flattened1 = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {

	console.log(a, b);
  return a.concat(b);
});

console.log(flattened1);  
///as expected.... one iteration will be less...
// [0, 1] [2, 3]
// [0, 1, 2, 3] [4, 5]
// [0, 1, 2, 3, 4, 5]