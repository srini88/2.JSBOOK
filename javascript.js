
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

Grizzly.prototype.growl = function(){
    console.log("on the grizzly protottype")
}
var grizzly = new Grizzly('grizz'); 
 

console.log(grizzly.growl())   //prints on the grizzly protottype

//it checks is there a growl function on grizzly, no ..then go to Grizzly's prototype found it rthere...


///how does it know growl 
///is there a grown fulction here in grizzly , or Grizzly.prototype or Bear.prototyp