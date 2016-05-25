//var str = "aabcccccaaac";
var str = "abcd";

function manipulation (str){

	var output = "";
	var temp  = str[0];
	var count = 1;
	for (var i=1; i <str.length; ++i){

		 if(str[i] === temp){
		 	++count;
		 }
		 else{
		 	output += temp+count;

		 	temp = str[i]; ///
		 	count =1;   //came to new character..count updating to 1
		 }
	}
	output += temp+count;  //without this getting a2b1c5
	return (output.length > str.length)? str: output;

}

console.log(manipulation(str));  //a2b1c5