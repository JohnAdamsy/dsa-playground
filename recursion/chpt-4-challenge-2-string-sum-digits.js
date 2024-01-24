// Course: Recursion for Coding in Javascript
// Chapter: 4. Recursion with Strings
// Challenge: 2. Sum of Digits in a String

// Problem: Given a string containing numbers, calculate the sum of those numbers.

/*
	Assumptions/Constraints
	1. String only contains positive numbers
	
	Methodology/Solution
	
	1. Base case. If empty return 0.
	2. For each string[0] we add
*/

// Test 1
	// Inputs: '345'
// Output: 12

// Test 2
	// Inputs: '9854321'
	// Output: 32

// Test 3
	// Inputs: '9 9955'
	// Output: 37

function sumDigits(string){
	// Base case
	if(!string[0]){
		return 0;
	} else { // Recursive case
		return Number(string[0]) + sumDigits(string.substr(1));
	}
	
}

// Test
// const myString = '345';
// const myString = '9854321';
const myString = '9 9955'
console.log(sumDigits(myString));