// Course: Recursion for Coding Interviews with Javascript
// Chapter 3: Recursion with numbers

// Challenge 2: Pascal's Triangle
	// Given a number, return a list containing the values of the Pascal's Triangle of that size

// Background: 
/*
* 

1. Pascal’s triangle is a triangular array of the binomial coefficients.

 					1						Row 0
				1		1					Row 1
			1		2		1			  	Row 2
		1		3 		3		1		  	Row 3
	1		4		6		4		1	  	Row 4
1		5		10		10		5		1 	Row 5

*/

// Test 1
	// Inputs: 5 
	// Output: [1, 5, 10, 10, 5, 1] 

// Test 2
	// Inputs: 6
	// Output: [1,6,15,20,15,6,1] 

// Thought/Solution: 
	// 1. 1st column and last column are 1 for each row
	// 2. Columns increase by 'k + 1' per row
	// 3. 1st Rows is index 0. It has 1 column.
	// 4. Next row will have previousRowColumns + 1

function pascalsTriangle(rowN){
	let row = [1]; // First column on each row
	
	// Base case
	if(rowN == 0){
		return [1];
	} else {
		// Recursive case
		previousRow = pascalsTriangle(rowN - 1)
		
		for(let i = 0; i< previousRow.length - 1; i++){
			row.push(previousRow[i] + previousRow[i+1]);
		}
		row.push(1); // Last column is 1;
	} 
	
	return row;
}

/**

Explanation:
1. 	Each row in Pascal’s triangle starts with a *1* ,and ends with a *1*, hence *row* is initialized with [1] and later 
	*1* is pushed in *row* variable (line number 37 and 49).

2. 	Also, each row is calculated based on the values of the previous row. Thus, the function makes a recursive function call with the previous row number as its argument, 
	i.e., rowN - 1.

3. If we reach *0th* row, we return a list containing only 1 value: [1] --> This is our BASE CASE

4. Now, for each *recursive call*, we use the values of the previous solution.
*/

// Test
const testRow = 3;
console.log(pascalsTriangle(testRow));


