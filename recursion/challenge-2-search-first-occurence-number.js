// Challenge 2: Search the First Occurrence of a Number
/* 
Implement a function that takes an array myNumbers, a targetNumber containing the number to search and currentIndex containing the starting index as parameters and outputs the index of the 1st occurrence of targetNumber in myNumbers. 
If targetNumber is not found in myArray return	-1. 
Hint: Search for targetNumber from index currentIndex to the end of the array
*/
// Inputs:
	// myNumbers
	// targetNumber
	// currentIndex - the start of index of our array
// Outputs:
	// Found: Index of the 1st occurence of targetVariable
	// NotFound: -1
//Approach: 
	// We want to search for a targetNumber from index currentIndex to the end of the myNumbers array.

function firstOccurrence(myNumbers, targetNumber, currentIndex){
	//Base case
	// Keep looking until when you find it
	// currentIndex == size-1 OR 
	if(targetNumber == myNumbers[currentIndex]) {
		return currentIndex;
	} else if (currentIndex == myNumbers.length && targetNumber != myNumbers[currentIndex]) {
		return -1;
	}
	else {
		return firstOccurrence(myNumbers, targetNumber, currentIndex + 1);
	}
}

// Test
const arr = [9, 8, 1, 8, 1, 7];
const testVariable = 11;
const index = 0;
console.log(firstOccurrence(arr, testVariable, index));