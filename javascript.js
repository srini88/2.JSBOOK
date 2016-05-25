
function Bear(type){
    this.type = type;
}
Bear.prototype.growl = function(){
    console.log(this.type + "says grr");
}


///Linked bear.prototype to grizzly and polar..//this is the distinctiion when usng the constructor functions...

var grizzly = new Bear("grizzly");
var polar = new Bear("polar");
console.log(grizzly.growl(),polar.growl())

console.log(grizzly.constructor === Bear)  //true

console.log(Bear.prototype)  //this has growll

console.log(Object.getPrototypeOf(grizzly) === Bear.prototype)  //true

console.log(Bear.prototype.isPrototypeOf(grizzly))  //true