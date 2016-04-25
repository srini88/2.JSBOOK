
var animals = [
{name :"Fluffkins", species : 'rabbit'},
{name :"Retriever", species : 'dog'},
{name :"Muffy", species : 'rabbit'},
{name :"bunny", species : 'rabbit'},
{name :"Doge", species : 'dog'}
];


///funcitons that take other functions as arguments - this is higher order functiosn....

///map ///////// unlike filter - it does not throuw objects away..instead it transforms them..
//// we want to get an array of all the names of all animals...


///lets use a for loop, get all names of animals.

var names = [];
for (var i = 0; i < animals.length ; i++){

	names.push(animals[i].name);
}

console.log(names);  //["Fluffkins", "Retriever", "Muffy", "bunny", "Doge"]


