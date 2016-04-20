

////Bear from Kyle channel..... Prototypal inheritance...

///constructor function
function Bear(type){
	this.type = type;
}

Bear.prototype.growl = function(){
	console.log(this.type + " says grr");
}

function Grizzly(){
//so add this

Bear.call(this, "grizzly");

}

//Grizzly.prototype = Bear.prototype  ///this is wrong...this is making it equal bear...we need a new object that is based off of prototype


Grizzly.prototype = Object.create(Bear.prototype);  //everythign we have on Bear.prototype , we gonna apply to Grizzly proottpe


var grizzly = new Grizzly;
var polar = new Bear("polar");
console.log(grizzly.growl());  ///this is the problem ...here it prints undefined says grr  ---- why? 
/////in Grizzly we are not callign ght econstructor of the Bear type..

///now it says Grizzly says Grr 



