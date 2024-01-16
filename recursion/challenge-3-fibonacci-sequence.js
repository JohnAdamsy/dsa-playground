
// Course: Recursion for Coding Interviews with Javascript
// Chapter 2: Iteration vs Recursion

// Challenge 3: The nth Fibonacci Number
// Background: 
/**
1. The Fibonacci sequence is one of the most famous sequences in mathematics. 
Each number in the sequence is the sum of the two numbers that precede it.

2. So, the sequence goes:
$ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 … $
i 0	 1	2  3  4  5  6  7  8    9  n

3. Indexing starts at 0. 
	=> At index O, element is 0.
	=> At index 1, element is 1.
 	=> At index 2, element is 1.
	=> so forth..

4. Mathematical Equation: F_{n} =   F_{n-2} +  F_{n-1}
5. By default, the 1st and the 2nd number in the sequence are 0 & 1
*/

/* 
Implement a function that takes a variable fibIndex and finds the number that is placed at that index in the Fibonacci sequence.
*/

// Inputs:
	// fibIndex
// Output:
	// The corresponding element in the Fibonacci sequence.
function fibonacci(fibIndex){
	//Base case
	if (fibIndex <= 1) {
		return fibIndex;
	} 
	
	// Recursive case - uses binary recursion. The recursive function calls 2 instances of itself. 
	return fibonacci(fibIndex - 2) + fibonacci(fibIndex - 1);
}

//Test
// 6 => 8
// 7 => 13
// 8 => 21
// 9 => 34
const index = 8;
console.log(fibonacci(index));