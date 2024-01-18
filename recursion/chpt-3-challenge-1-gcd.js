// Course: Recursion for Coding Interviews with Javascript
// Chapter 3: Recursion with numbers

// Challenge 1: Find the Greatest Common Divisor
// Background: 
/*
* 

1. The Greatest Common Divisor (GCD) of two or more integers is the largest positive integer that divides each of the integers.
2. For example, take two numbers 42 and 56: 
	// 42 can be completely divided by 1,2,3,6,7,14,21 & 42
	// 56 can be completely divided by 1,2,4,7,8,14,28 & 56
3. Therefore the GCD of 42 & 56 is 14.
*/

// Test 1
	// Inputs: 42, 56
// Output: 14
// Test 2
	// Inputs: 6, 9
// Output: 3

// Thought/Solution: 
	// 1. Ensure variables are positive integers.
	// 2. Base case: End the check when the divisor is equal to dividend
	// 3. We will use the long division method. Where we find GCD by dividing the greatest number by the smallet number until the remainder is 0. The divisor when the remainder is 0 will be the GCD.

function gcd(testVar1, testVar2){
	// Base case
	if(testVar1 === testVar2){
		return testVar1;
	} 
	
	// Recursive case
	if(testVar1 > testVar2){
		return gcd(testVar1 - testVar2, testVar2 );
	} else {
		return gcd(testVar1, testVar2 - testVar1);
	}		
}


// Test
const value1 = 42;
const value2 = 56;
console.log(gcd(value1, value2));


