// converting arguments object to an array so that we can use array methods like sort or something 
// now printing after sorting 
function printArr(){
	// converting javascript arguments object to an array 
	var arrConv = Array.prototype.slice.call(arguments); // by heart this
	// arrConv is an array

	// 2nd way of conversion using array literals 
	// remember no Array and no prototype
	// you are calling slice and call directly on []
	var arrConv1 = [].slice.call(arguments);
	arrConv1.sort();   // this sort wont work if you have 1, 11, 21, and all  , just using it temporarily 
	console.log(arrConv);  //[3, 4, 8]   // sorted now
	console.log(arrConv1);  //[3, 4, 8]   // sorted now
}
printArr(3, 8, 4);