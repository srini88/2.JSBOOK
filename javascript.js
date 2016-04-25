////https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures


////readuibg mozilla documentation on closures...


///Closure


function makeFunc(){

	var name = "Mozilla";

	function displayName(){
		console.log(name);
	}
	return displayName;  //makeFunc Retrurning displayName
}

var myFunc = makeFunc();
myFunc();  ///Mozilla

///myFunc is a closure....
////closure combines two things...a function and the environmemt in which it was created...
///the environment consists of any local variables that were in scope at the time the closure was created...
///in our case myFunc is a closure that incorporates both the displayName and the "Mozilla" string that existed when the closure was created..