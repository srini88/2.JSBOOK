
function Bear(type){
    this.type = type;
}
Bear.prototype.growl = function(){
    console.log(this.type + " says grr");
}
///create another class called grizzly

function Grizzly(name){
    Bear.call(this,name);  //cll this Bear  constructor using this instance
}



Grizzly.prototype = Object.create(Bear.prototype);


var grizzly = new Grizzly('grizz'); 
 


grizzly.growl = function(){   //growl function on grizzly itself
    console.log("override")
}
console.log(grizzly.growl())   //prints override...

///how does it know growl 
///is there a grown fulction here in grizzly , or Grizzly.prototype or Bear.prototyp