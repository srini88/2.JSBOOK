
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
			return "you are a sucker";
		}
	};
} //close of Init
	return {   //public interface...
		getInstance: function(){

			if (!instance){  //check already exists
				console.log("creating instance");
				instance = init();
				return instance;
			}
			else{
				console.log("returning 2nd hand");
				return instance;
			}
			
		}


	}

})();

console.log(NameSpace);
//now all clean...you can see it does not print creating instance by default...this is the lazy load shit...... it will only create wihen you ask for it...
//previously it creates and put it in memory....

///now adding more...

console.log(NameSpace.Singleton.getInstance().publicMethod1());

console.log(NameSpace.Singleton.getInstance().publicMethod2());

// creating instance
// fuck you nigga false
// returning 2nd hand
// you are a sucker