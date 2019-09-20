//array characters start at placement 0 also


//**Add All Values in the array and Print to Screen
var numbers = [3, 8, 12, 1, 6, 15, 3];

//have to define final before for loop 
//(global scope: available everywhere not just inside function)

var final = 0;

for(var i=0; i<numbers.length; i++) {
final += numbers[i]}


console.log(final);

//Using for loop and if statements inside the for loop
//find the largest number in the array
var largest = 0;

for (var i = 0; i<numbers.length; i++){
if (numbers[i] > largest){
largest = numbers[i];
} 
}
console.log(largest);


//Step 1
//Create a for loop that creates an array of 100 random numbers
//
var myArray = [];

for (var i=0; i<100; i++){
myArray.push(Math.random())
}

//Step 2
//From the random number array created above, find the smallest number

var smallest= myArray[0]

for (var i=0; i< myArray.length; i++){
if(myArray[i] < smallest){
smallest = myArray[i];
}
}
console.log(smallest);
