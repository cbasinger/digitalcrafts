//Sarah: 22
//Bob: 19
//Henry: 22
//Katie: 9
//>=16 to drive
//>=21 to drink
//>= 25 to rent a car
//<10 to play in ball pit



var drive= function(age) {
if(age >= 16){
return true}
 return false
}



var drink= function(age) {
if(age >= 21){
return true}
else{
 return false
}}

var rent= function(age) {
if(age >= 25){
return true;}
else{
return false
}}


var play= function(age) {
if(age < 10){
return true}

return false
}

var myArray = [];

var testAges= function(name, age) {

var message = "";
if (drive(age)){
 message = name + " can drive";
}
else{
 message = name + " cannot drive";
}

myArray.push(message);

if (drink(age)) {
 message = name + " can drink";
}
else{
 message = name + " cannot drink";
}
myArray.push(message);

if (rent(age)) {
 message = name + " can rent a car";
}
else{
 message = name + " cannot rent a car";
}
myArray.push(message);


if (play(age)) {
message = name + " can play"; 
}
else {
message= name + " is too old to play"
}
myArray.push(message);
}

testAges("Sarah", 32);
testAges("Bob", 19);
testAges("Henry", 22);
testAges("Katie", 9);

console.log(myArray);


