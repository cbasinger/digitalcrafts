 var ltvFunction = function(ARPA, MM, churn) {
	var LTV = (ARPA*MM)/churn;
	return LTV;
}

console.log(ltvFunction(10, 2, 5));

console.log("Steve thinks the LTV should be " + ltvFunction(12, 3, 6));

console.log("John thinks the LTV should be " + ltvFunction(9, 1, 4));

