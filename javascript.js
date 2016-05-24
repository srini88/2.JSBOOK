var p1 ={

	name :"srini"
}
var p2 = {
	name : "palghat"
}


function say(msg){
	this.name = msg;
	//console.log(msg);
}
//changing p1's name using call
say.call(p1, "basha" );
console.log(p1);  //Object {name: "basha"} //this is p1 here and you are modifying p1 itslef...


