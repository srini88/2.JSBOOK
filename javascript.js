var singleton = (function(){
console.log("hi")
	var instance ;
	var p1;
	var p2;

	function init(){
		return {
			p1:5, 
			p2 :6,
			pMethod :function(){
				return "fuck off";
			}
		}
	}
	return {
		getInstance :function(){
			if (!instance){
				console.log("creating instance")
				instance = init();
			}
			return instance;
		}
	}
})();

console.log(singleton.getInstance().pMethod())
console.log(singleton.getInstance().pMethod())