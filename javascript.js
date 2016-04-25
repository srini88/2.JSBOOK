////looking at reduce...

////another higher order function reduce...

///what is reduce?
///reduce is the multitool of transformations...



var orders = [
	{amount : 1},
	{amount : 2},
	{amount : 3},
	{amount : 4}
];

///reduce wants an object unlike map and filter, 2nd argument..
///this object as a starting point 
var totalAmount = orders.reduce(function(sum, order){
	console.log("accumulator: " +sum + " amount:  "+order.amount);
	return sum+order.amount;
}, 0);   /////passing accumulator as zero ...which will be sum in the first argument..

console.log(totalAmount);
// accumulator: 0 amount:  1
// accumulator: 1 amount:  2
// accumulator: 3 amount:  3
// accumulator: 6 amount:  4
// 10

///when I remove zero ..I'm getting..weird

// accumulator: [object Object] amount:  2
// accumulator: [object Object]2 amount:  3
// accumulator: [object Object]23 amount:  4
// [object Object]234