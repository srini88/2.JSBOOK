
///Learning common patterns with JS prototypes....
function Bear(){
    if (!(this instanceof Bear)) return new Bear();
}
 var grizzly = Bear();
 console.log(grizzly)