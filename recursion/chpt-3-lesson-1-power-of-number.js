// Course: Recursion for Coding Interviews with Javascript
// Chapter 3: Recursion with Numbers
// Lesson 1: Power of a Number

/**
What does “Power of a Number” mean?

The power (or exponent) a,  of a number x, represents the number of times x needs to be multiplied by itself

=> 'x' to the power of 'a' is the product of 'x' with itself 'a' times!  

Mathematic Expression: 2^{3} = 8 
*/

// Implementation
// Inputs: 
	// 2
// Outputs: 
	// 8

function power(base, exponent){
	// Base case
	if(exponent == 0){
		return 1;
	} else { // recursive case
		return base * power(base, exponent - 1);
	}
}

// Test
const base = 2; 
const exponent = 7;
console.log(power(base, exponent));