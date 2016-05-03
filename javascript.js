
///// in the previous post, we saw the basic structure of a JS singleton pattern..

// what is the need of JS lazy loading singleton pattern? 

// You can understand that JavaScript Singleton pattern which explain in previous post becomes performance issue if the code inside singleton object becomes more and more because the ananimous function executes immediately and returns properties, function, etc into singleton object immediately when .js files loads.

// So it is wise to execute the function when it requires really. For that we need to define getInstance() method which checks to see whether the singleton has been instantiated. If not, it will instantiated and returned.  If it has, a stored copy is returned.


var NameSpace={};
NameSpace.Singleton = (function(){

	var instance;


	function init(){   //function init is abstracted..
	//private members...	
	/////console.log("boo")    //this does not get printed...
	var privateAttr1 = false;
	var privateAttr2 = [1, 2, 3];

	function privateMethod1(){

	}
	function privateMethod2(){

	}
	return { //public members..   //this return returns to init
		publicAttr1 : true, 
		publicAttr2 : 21,
		publicMethod1 :function(){
			return "fuck you nigga " + privateAttr1;  //this.privateAttr1 gives undefined
		},
		publicMethod2 : function(){

		}
	};
} //close of Init
	return {   //public interface...
		getInstance: function(){

			if (!instance){  //check already exists
				console.log("creating instance");
				instance = init();
			}
			return instance;
		}


	}

})();

console.log(NameSpace);
console.log(NameSpace.Singleton.getInstance());  ///will get the godammn instance..
//Object {publicAttr1: true, publicAttr2: 21}

console.log(NameSpace.Singleton.getInstance().publicMethod1());
//fuck you nigga false

var singleA = NameSpace.Singleton.getInstance();
var singleB = NameSpace.Singleton.getInstance();

console.log(singleA === singleB);   //true

// I guess the most famous Singleton probably looks like this: $. To put it another way, ever notice how you can use jQuery anywhere in your app after you've included it on the page...? Boom! Singleton!


// The Singleton object is implemented as an immediate anonymous function. The function executes immediately by wrapping it in brackets followed by two additional brackets. It is called anonymous because it doesn't have a name. 
// //////it executes immediately as we need the interface to get the singleton..


// The getInstance method is Singleton's gatekeeper. It returns the one and only instance of the object while maintaining a private reference to it which is not accessible to the outside world.

// The getInstance method demonstates another design pattern called Lazy Load. Lazy Load checks if an instance has already been created; if not, it creates one and stores it for future reference. All subsequent calls will receive the stored instance. Lazy loading is a CPU and memory saving technique by creating objects only when absolutely necessary.