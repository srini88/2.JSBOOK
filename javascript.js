
// http://www.sitepoint.com/higher-order-functions-javascript/

///first class functions....

// js treats functionsa as first claszs citizens...means objects...they can be assigned as the value of a variable...can be passed and returned just like any other refgerence variable...

// fns use a callback...a cb is a fn that gets executed at the edn of the operation, once all all the other operations have been completed....


// JS is single threaded...only one operation at a time.....each operation that is going to happen is queued along this single thread....we are allowing async behavior....



var btn = document.getElementById("btn");

// var elem = document.getElementById("para1");
// console.log(elem);
console.log(btn);
btn.addEventListener("click", function(event){

	console.log(event);
	console.log("nigga you clicked the btn");

});