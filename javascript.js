// the unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.


// var arr = [1, 2];

// arr.unshift(0); // result of call is 3, the new array length
// // arr is [0, 1, 2]

// arr.unshift(-2, -1); // = 5
// // arr is [-2, -1, 0, 1, 2]

// var arr  = [3, 1, 4, 2, 5];
// console.log(arr.unshift(20));  //returning 6 length of the new array
// console.log(arr)  //[20, 3, 1, 4, 2, 5]

//sorting my own method..... sorts in ascending order
var arr  = [3, 1, 4, 2, 5];
///cannot do shifting and unshifting for sorting with O(n)
var result = [];
//result[0] = arr[0];
for (var i =0 ; i < arr.length ;++i){

	for (var j=i+1; j <arr.length; ++j){
		if (arr[j] < arr[i]){
			var temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;

		}
		//console.log(arr)
	}

}

console.log(arr)  //[1, 2, 3, 4, 5]  //this workis
