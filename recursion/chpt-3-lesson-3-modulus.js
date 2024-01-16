// Course: Recursion for Coding Interviews with Javascript
// Chapter 3: Recursion with Numbers
// Lesson 3: Modulus

/**
* The 'modulo operation' (mod or %) returns the _remainder_ when a number is divided by another.
*  - Dividend: The number being divided
*  - Divisor: The number that divides  

Mathematical Expression:
	// (divisor * quotient) + remainder = dividend
	// Therefore: 
		// dividend MOD divisor = (dividend - divisor) MOD divisor
*
*/

// Implementation
// Inputs: 
	// dividend = 10
// divisor = 4
// Outputs: 
	// 2

function mod(dividend, divisor) {
	// Block if division by 0
	if(divisor == 0){
		console.log('Divisor cannot be 0')
		return 0;
	}
	
	//Base case: when divident < divisor
	if(dividend < divisor){
		return dividend
	} else {
		// Recursive case
		return mod(dividend - divisor, divisor);
	}
}

// Test
const dividend = 10;
const divisor = 4; 
console.log(mod(dividend, divisor));
