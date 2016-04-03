// var name = "srini";

// var name1 = "SRINI";
// console.log(name.toUpperCase());  //SRINI
// console.log(name1.toLowerCase());  // srini


// console.log(name.charAt(8));  // nothing
// console.log(name.charAt(3));  // n

//http://stackoverflow.com/questions/3745515/what-is-the-difference-between-substr-and-substring

// substr and substring differnt - use substring which takes start and end 


// The substring() method extracts the characters from a string, between two specified indices, and returns the new sub string.

// This method extracts the characters in a string between "start" and "end", not including "end" itself.

// If "start" is greater than "end", this method will swap the two arguments, meaning str.substring(1,4) == str.substring(4,1).

// If either "start" or "stop" is less than 0, it is treated as if it were 0.

// Note: The substring() method does not change the original string.


var name2 = "My name is srini";

console.log(name2.substring(0)); // My name is srini // start and no end - fetches all 

console.log(name2.substring(1)); // y name is srini // start at 1 and no end - fetches rest


console.log(name2.substring(1,3));  //y
console.log(name2.substring(3,1));   //y str.substring(1,4) == str.substring(4,1).

console.log(name2.substring(-1));   //If "start" is less than 0, it will start extraction from index position 0


// extract the first character 

console.log(name2.charAt(0));  //M
console.log(name2.substring(0,1));  //M


// extract the last character 

//The length property represents the length of a string.
var len = name2.length;

console.log(len);   //16
console.log(name2.substring(len-1, len));   // i
 


