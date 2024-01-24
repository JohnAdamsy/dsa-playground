// Course: Recursion for Coding in Javascript
// Chapter: 4. Recursion with Strings
// Lesson: 2. Remove all Adjacent Duplicates from a String

/**

Methodology:
	1. Lower and upper case letters are considered different characters. Example: string 'Hhelo' doesn’t contain any duplicates.
	2. Repeated occurrences of the same letter within a string are allowed as long as they are not next to each other. 
		// Example: string 'hele' has no adjacent duplicates.
*/

// Problem: Remove duplicate strings from 'Hellooo'.

// Test 1
	// Inputs: Hellooo
	// Output: Helo

function removeDuplicates(string){
	// base case
	if(string.length <= 1){
		return string;
	} else if (string[0] == string[1]){
		// Recursive case 1
		return removeDuplicates(string.substring(1));
	}
	// Recursive case 2
	return string[0] + removeDuplicates(string.substring(1));	
}

// Test 
const myString = 'Helloook';
console.log(removeDuplicates(myString));