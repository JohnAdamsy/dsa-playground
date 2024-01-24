// Course: Recursion for Coding in Javascript
// Chapter: 4. Recursion with Strings
// Challenge: 1. Length of a String

// Problem: Given a string. find its length using recursion

/*
	Methodology/Solution
	
	1. We will stop counting when string[0] is empty. This should be our base case
	2. For each string[0] we store a count
*/

// Test 1
	// Inputs: 'Educative'
	// Output: 9

// Test 2
	// Inputs: 'Transformers'
	// Output: 12 

// Test 3
	// Inputs: 'playground'
	// Output: 10 

function length(string){
	let len = 0;
	// Base case
	if(!string[0]){
		return 0;
	} else { // Recursive case
		len += 1;
		return len + length(string.substr(1));
	}
	
}

// Test
// const myString = 'Educative';
// const myString = 'Transformers';
const myString = 'playground';
console.log(length(myString));