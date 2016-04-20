

////Bear from Kyle channel..... Prototypal inheritance...

///constructor function
function Bear(type){
	this.type = type;
}

Bear.prototype.growl = function(){
	console.log(this.type + " says grr");
}

var grizzly = new Bear("grizzly");
var polar = new Bear("polar");
console.log(grizzly.growl(), polar.growl());  //





