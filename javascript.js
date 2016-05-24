
///closures trying out...
///if I dont use IIFE
var ab = function(){

	var counter =0;
	return function(){
		return ++counter;
	}
}

var counter =ab();  //got to use this to execute this shit..

console.log(counter());  //1
console.log(counter());  //2

