// Course: Recursion for Coding Interviews with Javascript
// Chapter 3: Recursion with Strings
// Lesson 1: Remove Spaces and Tabs in a String

/**
What does “Removing Tabs and Spaces from a String” mean?

1. Tabs -> "\t"
2. Spaces -> " "
## Hello World => HelloWorld

Note: 
1. Base case will be removing tabs from a null string.
2. Recursive case check whether or not the 1st element is "\t" or " ". 
3. A space charachater is not the same as a null/empty string

# Conditions of a non-empty string
1. If the first element is "\t" or " " we discard it and call another instance of the function after removing that element.
2. If the first element is not "\t" or " ", we append it to the output string and call another instance of the function after removing that element.
*/

// Test 1
	// Input: 'Hello\tWorld'
	// Output: 'HelloWorld'

// Test 2
	// Input: 'Removing\tTabs\tand\tSpaces from a String'
	// Output: 'RemovingTabsandSpacesfromaString'

function removeTabsSpaces(myString){
	// Base case
	if(myString.length == 0){
		return "";
	}
	
	// Recursive case
	if(myString[0] == "\t" || myString[0] == " "){
		return removeTabsSpaces(myString.substr[1]);
	} else {
		return myString[0] + removeTabsSpaces(myString.substr[1]);
	}
}

// Test
const myString = "Hello\tWorld"; 
console.log(removeTabsSpaces(myString));