// Course: Recursion for Coding in Javascript
// Chapter: 4. Recursion with Strings
// Lesson: 3. Merge Two Sorted Strings Lexicographically

/**

Background:
 - 'Lexicographical' means that something is organized according to alphabetical order
	1. Lower case letters are different from upper case letters and are therefore treated as different elements. All upper case letters come before lower case letters. Alphabetic sorting is as follows: $A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, a, b, c, d, e, f, g, h, i, 
j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z$
	2. We would like to merge two strings (that are already sorted).
	3. acu <--> bst will result to 'abcstu' after merging
	4. In Javascript, an alphabet can be compared with another alphabet. This means that 'a' < 'b', 'b' < 'c', 'c' < 'd' and so on.
*/

// Problem: Merge acu <--> bst

// Test 1
	// Inputs: string1 = 'acu', string2 = 'bst'
	// Output: 'abcstu'

// Test 2
	// Inputs: string1 = 'eqrtwy', string2 = 'bcmnvx'
	// Output: 'bcemnqrtvwxy'

// Constraints
 // Inputs string1 & string2 have to be sorted individually

// Solution/Thought Process
// ** The idea behind the algorithm is that the smaller of the letters from the beginning of the two strings gets picked first. Then, the recursive procedure is applied to merge the rest of the two strings. If one of the two strings are finished, the other string can just be copied to the output

function mergeStrings(string1, string2){
	// Base case1
	if(string1.length == 0){
		if(string2.length == 0){
			return '';
		}
		return string2;
	// Base case2
	} else if (string2.length == 0) {
		return string1;
	// Recursive case1
	} else if (string1[0] > string2[0]){
		return string2[0] + mergeStrings(string1, string2.substr(1));
	// Recursive case2
	} else {
		return string1[0] + mergeStrings(string2, string1.substr(1));
	}
} 

// Test
// const string1 = 'acu';const string2 = 'bst';
const string1 = 'eqrtwy'; const string2 = 'bcmnvx'
console.log(mergeStrings(string1, string2));