//or else do this
//using IIFE now
var ab = (function(){

	var counter =0;
	return function(){
		return ++counter;
	}
})();

console.log(ab());  //1
console.log(ab());  //2

