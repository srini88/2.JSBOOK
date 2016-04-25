var addTo = function(passed){

	var add = function(inner){
		return passed + inner;
	};

	return add;   ///////our addTo fn returns the function add
};

//console.dir(addTo(3));   //function add{}  ///returns add fn..with access to passed....which is being presereved...


var addFour = addTo(3);   ///you are preserving this 3 value in all the subsequent function calls

console.log(addFour(4)); //returns 7

console.log(addTo(3)(4));  //this also returns 7

///closures are functions with preserved data....

