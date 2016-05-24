var p1 ={

	name :"srini",
	ln :"vas"
}
 var prop ;
 for (prop in p1){
 	console.log(prop)
 	console.log(prop + ": " + p1.prop)
 }
var pr = 'name';
 console.log(p1.pr)  //undefined...wont work...always use p1[prop] bracket notation