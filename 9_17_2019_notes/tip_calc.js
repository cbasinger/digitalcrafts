//step 1: Points Calculator
//Answer yes/no or boolean values to the following questions
//Add sum of answers in function 

//Did the waiter greet you?
//Did they bring bread/water to start?
//They check on drink refills?
//Did they check if the food was ok?
//Were they prompt in getting the check?

var score=0
var tip= " "

var scoreCalculator= function(greet, bread, drink, good, check){
	if (greet == true) {score +=1}
	if (bread == true) {score +=1}
	if (drink == true) {score +=1}
	if (good == true) {score +=1}
	if (check == true) {score +=1}

