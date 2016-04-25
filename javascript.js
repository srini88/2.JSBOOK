////looking at reduce...

////another higher order function reduce...

///what is reduce?
///reduce is the multitool of transformations...



var orders = [
	{amount : 250},
	{amount : 150},
	{amount : 250},
	{amount : 550}
];

//traditional way...

var totalAmount = 0;
for (var i=0 ; i <orders.length ; i++){
	totalAmount += orders[i].amount;
}

console.log(totalAmount);  //1200