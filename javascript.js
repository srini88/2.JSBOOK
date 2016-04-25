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
	return animal.species === "dog";  //just one line of logic
}
console.log(dogs);  //you get what you want here..

////cb and filter compose togeteher...





