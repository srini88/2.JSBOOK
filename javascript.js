
//sorting numbers...without argunents
function add(){
	var arr  = Array.prototype.slice.call(arguments); //slice takes start and end...herepassing only start
	console.log(arr);  //this makes it array..

	arr.sort(); 
	console.log(arguments)  //this is an object with some extra shit..
	//arguments.sort();
	//return arguments;
	return arr;   //this code works.
}

console.log(add(9, 5, 7, 6));