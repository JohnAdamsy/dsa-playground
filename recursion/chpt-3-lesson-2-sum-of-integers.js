// Course: Recursion for Coding Interviews with Javascript
// Chapter 3: Recursion with Numbers
// Lesson 2: Sum of Integers from 1 to n

/**
1. 'Natural numbers' are positive numbers starting from *1*. 
	These can be written as: 1,2,3,4,5,6,7,8,9,10...n

=> For example if n = 5: 
	The sum of numbers from 1 to 5 is: 1 + 2 + 3 + 4 + 5 = 15

Mathematical Expression: \sum_{i=0}^n 
 5
∑ i
 i=1
*/

// Implementation
// Inputs: 
	// 5
// Outputs: 
	// 15

function sumOfIntegersFromOneToLastValue(lastValue){
	// base case
	if(lastValue == 1){
		return 1;
	} else {
		return sumOfIntegersFromOneToLastValue(lastValue - 1 ) + lastValue;
	}
}

// Test 
const valueN = 5;
console.log(sumOfIntegersFromOneToLastValue(valueN));