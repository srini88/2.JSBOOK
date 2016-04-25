///look at filter...


var animals = [
{name :"Fluffkins", species : 'rabbit'},
{name :"Retriever", species : 'dog'},
{name :"Muffy", species : 'rabbit'},
{name :"bunny", species : 'rabbit'},
{name :"Doge", species : 'dog'}
];

//functions you send into another function is called cb function..
///it expects the cb to return etierh true or false..
///return the new filterd array..


var dogs = animals.filter(cb);


function cb(animal){
	
	return false;

	//console.log(animal); 
	//Object {name: "Fluffkins", species: "rabbit"}
	//Object {name: "Retriever", species: "dog"}....
}
console.log(dogs);  //by returning false in the cb function...you get an empty array in the dog [] 






