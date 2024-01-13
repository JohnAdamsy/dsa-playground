// Challenge 1: Compute the Square of a Number
// Inputs: 
	// theNumber
// Outputs:
	// theNumber squared
// Test 
	// Input: 5
	// Output: 25

// Solution:
 // Mathematically we know that: (n-1){2} =  n^{2} - 2n + 1
// Solution 1: The solution to this problem is simple. We multiply the input variable with itself and return the result.
// Solution 2: Use recursion
// Arrange like terms together:
// n^{2} =  (n-1){2} + 2n - 1
// Optimization Notes: A more efficient approach would be to return the number multiplied by itself, not using recursion
function computeSquare(theNumber){
	if(theNumber == 0){ // Base case
		return 0;
	} else { // Recursive case
		return computeSquare(theNumber-1) + (2 * theNumber) - 1;
	}
}

//Test
const testNumber = 17;
console.log(testNumber, ' Squared = ', computeSquare(testNumber));