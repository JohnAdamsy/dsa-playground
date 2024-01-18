// Course: Recursion for Coding Interviews with Javascript
// Chapter 3: Recursion with numbers

// Challenge 3: Convert Decimal Number to Binary Number
 // Write a function that takes a number decimalNumber and returns a string that is its equivalent binary number.

// Background
/**
## Using the division method

Step 1: Divide the given decimal number by “2” where it gives the result along with the remainder.

Step 2: If the given decimal number is even, then the result will be whole and it gives the remainder “0”

Step 3: If the given decimal number is odd, then the result is not divided properly and it gives the remainder “1”.

Step 4: Continue the above process of dividing the result by 2 until the result/quotient is 0 and the reaminder left if 1.

Step 5: By placing all the remainders in order in such a way, the Least Significant Bit (LSB) at the top and Most Significant Bit (MSB) at the bottom, the required binary number will be obtained.

Ref: https://byjus.com/maths/decimal-to-binary/ 
*/

// Test 1
	// Input: 11
	// Output: "1011"

// Test 2
	// Input: 294
	// Output: "100100110"

// ### Solution 1 - own
function convertDecimalToBinary(decimalNumber){
	let binary = '';
		
	if (decimalNumber <= 1){ // Base case 1
		return decimalNumber.toString();
	} else {
		
		if(decimalNumber % 2 < 1){ // is even number
			decimalNumber = decimalNumber / 2;
			binary = '0' + binary;
		} else { // is odd number
			decimalNumber = (decimalNumber - 1) / 2;
			binary = '1' + binary;
		}
		
		return  convertDecimalToBinary(decimalNumber) + binary;
	}
	
}

// ### Solution 2 - course example
function decimalToBinary(decimalNumber) {
  // Base case
  if (decimalNumber <= 1) {
    return decimalNumber.toString()
  }

  // Recursive case
  else {
    return decimalToBinary(Math.floor(decimalNumber / 2)) + decimalToBinary(decimalNumber % 2)
  }
}

// Driver Code
var testVariable = 11
console.log(decimalToBinary(testVariable))



// Test
const num = 294;
console.log(convertDecimalToBinary(num));