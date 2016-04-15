// valueOf()

// this gets alled wheneveer an operator is used on an object...
// by default it simply returns an object instance....

// the primitive wrapper types override valueOf so that it returns a string for String, boolean for a boolean and a number for Number.... 

// Date objects valueof method returns the epoch time in milliseconds...just as Date.prototype.getTime() does.... 



var now = new Date;

var earlier = new Date(2010, 1, 1);

console.log(now);  //Thu Apr 14 2016 22:29:50 GMT-0500 (Coordinated Universal Time)
console.log(earlier);  ///Mon Feb 01 2010 00:00:00 GMT-0600 (Coordinated Universal Time)


console.log(now - earlier);   //195687009977

console.log(now > earlier);  //// true 

// above, the valueOf is called on both objects before the - or comparison is performed... 
// in the subtraction you got the difference in epoch time because of Valueof 


/////you can always define your own valueOf method if your objects are intended to be used with operators .....
///toString() 

/// toString() method is called as a fallback whenever valueOf returns a reference value instead of a primitive value 
///it is also implicity called on primitive values when JS is expecting a string...

///ex when string is used as one operand for the plus operator, the other oeprand is automatically converted to a string... 

///if the other operand is a primitive value, it is converted into a string representation -- (true becomes "true")


////if it is a reference value , then valueOf is called...

// if valueOf returns a reference value, toString is called...

var book = {

	title : "JS book"

}

var message = "Book: "+ book;  //// you are adding string to an object..this book will be tried to be converted to a string///its toString will be called -- that toString is inherited from Object.prototype and returns the default value of [object Object]


///if you are happy with the answer leave it,, sometimes it is usefule to define your own toString() method so that string conversions return a value that gives more information

console.log(message);   //Book: [object Object]


////lets do that shit

var book1 = {
	title :"php book",
	toString : function (){
		return this.title;
	}
}

var message = "book : "+ book1;

console.log(message);   ///book : php book  see you got correct shit now 


