
///Learning common patterns with JS prototypes....
function Bear(){
    if (!(this instanceof Bear)) return new Bear();
}
 var grizzly = Bear();
 console.log(grizzly)

///doing inheritance with objects literal notation..

var person1  = {
    name :"srini"

}


var person2 = Object.create(person1);

console.log(person2.name)  //got this stuff from person1 through inheritance..

console.log(person1.isPrototypeOf(person2)) //true

person2proto = Object.getPrototypeOf(person2);

console.log(person2proto)  ///person1 object itself...

console.log(person2proto === person1)  //true
console.log(person2.constructor)  //shows function Object...//constructor stuff not working correctly since you hhave not used constructors here...
