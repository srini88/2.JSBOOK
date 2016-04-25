
var animals = [
{name :"Fluffkins", species : 'rabbit'},
{name :"Retriever", species : 'dog'},
{name :"Muffy", species : 'rabbit'},
{name :"bunny", species : 'rabbit'},
{name :"Doge", species : 'dog'}
];

///the cb will be passed each item in the animal array..

var names = animals.map(function (animal){
	return animal.name +  " is a " + animal.species;  

});
// console.log(names);  ["Fluffkins is a rabbit", "Retriever is a dog", "Muffy is a rabbit", "bunny is a rabbit", "Doge is a dog"]