// Course: Recursion for Coding in Javascript
// Chapter: 4. Recursion with Arrays
// Lesson: 1.  Count all Occurrences of a Number

/*
Problem: Find the number of times a key occurs in an array
*/

// Test 1
// Input: [1,2,1,4,5,1,5,4,5,2,1,0,1]
// Required: Find how many times the key 1 occurs in the array
// Ouput: 5

// Solution 
function count(myArray, key){
	let keyCount = 0;
	// Base case
	if(myArray.length == 0 ){
		return 0;
	} else {
		// Recursive case
		if(myArray[0] === key) {
			keyCount += 1;
		}
		
		return keyCount + count(myArray.slice(1), key);
	}
}

// Test
const myArray = [1,2,1,4,5,1,5,4,5,2,1,0,1]
console.log(count(myArray, 1));
