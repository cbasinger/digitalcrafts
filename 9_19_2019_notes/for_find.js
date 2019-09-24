//We are going to have an array of items
//We are going to create a function with 2 parameters
//first paramenter will be an array to search 
//second parameter will be a value to find
//inside function, use a for loop to go through the array 
//and return true if finds second parameter inside the array
//otherwise return false

var items= ["Cat", "Dog", "Snake", "Ferret", "Big Foot"];

var findItem = "Big Foot";


//**This was my first go, inserting the pre-defined variables
// into the function. The better function is below as the currently
// running function, so that you are able to insert different 
// variables into the function to product a result.

//var bestPet= function(items, findItem){
// 	for (i=0; i<items.length; i++){
//		if (findItem) {
//		return true}
//		else {return false}
//	}}

var searchItems= function(haystack, needle){
	for (i=0; i<haystack.length; i++){
		if (haystack[i] == needle){
			return true}
		
	}
	return false;
};


console.log(searchItems(items, findItem))
