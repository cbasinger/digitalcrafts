//In this exercise, we are going to find an array that has duplicate values
//We will have a first loop that goes through all of the items in the array
//And we will have a second loop that checks all of the items against 
//the index of the first loop
//When a duplicate is found, print the duplicate to the screen

var items = ["Cat", "Dog", "Ferret", "Alien", "Dog", "Bird", "Ferret"];


for (var i= 0; i<items.length; i++){
        for(var j=0; j<items.length; j++){
//putting i not equal to j eliminates them lining up and printing multiples
	if (i != j && items[i] == items[j]) { 
        	console.log(items[j]);
        	}
	}		
}
