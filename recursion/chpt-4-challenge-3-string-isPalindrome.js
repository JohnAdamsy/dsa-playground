// Course: Recursion for Coding in Javascript
// Chapter: 4. Recursion with Strings
// Challenge: 3. Check Palindrome

// Problem: Given a string, check whether it's a palindrome.

/*
	
	## Background: 
1. A Palindrome is a string that reads the same backward and forwards. 
2. For example 'madam', 'pop' etc. 
3. All strings with length 1 are considered palindromes.
	
	Assumptions/Constraints
	1. Lower case letters are different from upper case letters -- so,  'Ada' is NOT a palindrome.
	
	Methodology/Solution
	
	1. Base case. If string.length <= 1 return true;
	2. Recursive case: check first and last char as you reduce it
*/

// Test 1
	// Inputs: 'madam'
// Output: true

// Test 2
	// Inputs: 'Ada'
	// Output: false

function isPalindrome(input){
	// Base case
	if(input.length <= 1){
		return true;
	} else if(input[0] == input[input.length - 1]) { // compares the 1st and last elements
		return isPalindrome(input.substring(1, input.length - 1));
	}
		return false;
	
}

// Test
// const myString = 'madam';
// const myString = 'Ada';
const myString = 'mom'
console.log(isPalindrome(myString));