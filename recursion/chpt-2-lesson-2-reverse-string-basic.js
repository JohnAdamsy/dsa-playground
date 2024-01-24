function reverseStringIterative(string){ // Using Iteration - while loop
	let reverse = '';
	let length = string.length - 1;
	
	while(length >= 0) { // loop condition
		reverse = reverse + string[length];
		length -=1;
	}
	
	return reverse;
}

// Using Recursion
function reverseStringRecurive(string){	
		//base case
	if(string === ''){
		return string;
	} else {
		//recursive case
		let remainingString = string.substr(0, string.length-1);
		return string[string.length-1] + reverseStringRecurive(remainingString);
	}
}

//Test
const myString = 'Hello World!';
//console.log(reverseStringIterative(myString));
console.log(reverseStringRecurive(myString));