/////not created with var, so can be deleted 


// A longer answer: If you declared your variable x with the var keyword at the time of first use, then delete x will not have any effect: x will still be available and hold the same value as before. As a partial workaround, you can set your variable to null or to undefined; however, this is not equivalent to deleting the variable, as shown in the example below.


b = 5;


console.log(b);   ///5

console.log(window.b);   //////made it global   5

delete(b);

console.log(b);   ////b is not defined

console.log("later");



///if it is created with var, it cannot be deleted

var c = 5;


console.log(c);   ///5

console.log(window.c);   //////made it global   5

delete(c); //////no op here

console.log(c);    ////stll prints 5 

/////to delete you got to use 

