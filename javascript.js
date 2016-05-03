////singleton pattern

///Singleton pattern.....
//IIFE
var NameSpace={};
NameSpace.Singleton = (function(){

	//private members...	
	var privateAttr1 = false;
	var privateAttr2 = [1, 2, 3];

	function privateMethod1(){

	}
	function privateMethod2(){

	}
	return { //public members..
		publicAttr1 : true, 
		publicAttr2 : 21,
		publicMethod1 :function(){

		},
		publicMethod2 : function(){

		}
	};
})();

console.log(NameSpace);

// What are the advantages of this pattern?

// Namespacing
// Grouping related methods and attributes together.
// What are the drawbacks of this pattern?

// Tightly coupled
// Unit testing is difficult