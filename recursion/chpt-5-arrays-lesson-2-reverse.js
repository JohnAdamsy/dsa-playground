// Course: Recursion for Coding in Javascript
// Chapter: 4. Recursion with Arrays
// Lesson: 2.  Reverse an Array

/*
Problem: Given an array, return a new array with its elements flipped in reverse in order
*/

// Test 1
// Input: [1,2,3,4]
// Required: Reverse the array
// Ouput: [4,3,2,1]

// Solution 
function reverse(myArray){
	// Base case 1
	if(myArray.length == 0 ){
		return [];
	} else if (myArray.length == 1) {
	// Base case 2
		return myArray;
	}
	
	//Recursive case
	const remArray = myArray.slice(0,-1);
	const lastElement = myArray[ myArray.length - 1];
	return [lastElement].concat(reverse(remArray))
}

// Test
const myArray = [1,2,3,4]
console.log(reverse(myArray));
