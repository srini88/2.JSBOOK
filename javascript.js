
var animals = [
{name :"Fluffkins", species : 'rabbit'},
{name :"Retriever", species : 'dog'},
{name :"Muffy", species : 'rabbit'},
{name :"bunny", species : 'rabbit'},
{name :"Doge", species : 'dog'}
];

///the cb will be passed each item in the animal array..

var names = animals.map(function (animal){

//filter only ture or false, whether item to be included in array or not..
///map expects we  return a new array. ..a transformed object...
///using map toreturn a subset of object...
	return animal.name;   //very simple

});
console.log(names);  //["Fluffkins", "Retriever", "Muffy", "bunny", "Doge"]  ///WHATTTTTTT