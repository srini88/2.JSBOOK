
function Bear(type){
    this.type = type;
}
Bear.prototype.growl = function(){
    console.log(this.type + " says grr");
}
///create another class called grizzly

function Grizzly(){
    Bear.call(this,'grizzly');  //cll this Bear  constructor using this instance
}

///we can inherit the Bear by assigning the prototype of girzlly to bear

//Grizzly.prototype = Bear.prototype   //this just makes equall to bear...wrong..
/// we need a new object that is based of off Bear.prototype...

Grizzly.prototype = Object.create(Bear.prototype);


var grizzly = new Grizzly(); //since Grizzly inherits Bear prototype our grizzly instance still have growl method...
//var polar = new ("polar");
//console.log(grizzly.growl())  //undefinedsays grr  

//why sayign undefined.....  in the constructor of Grizzly() we are not calling the constructor of Bear
console.log(grizzly.growl())  //now you get grizzly says grr