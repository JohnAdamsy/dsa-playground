function isVowel(char){ //function to check if value is a vowel or not
	char =  char.toLowerCase();
	const VOWELS = 'aeiou'; // the English vowels
	
	if(VOWELS.indexOf(char) != -1) {
		return true
	} else {
		return false;
	}
}

function countVowelsIterative(input){ // Iterative fn that returns the number of vowels found in a string
	let count = 0; 
	const charCount = input.length;
	let i = 0; //index
	
	//traverse the input while checking if each character is a vowel
	while(i <= charCount-1){
		if(isVowel(input[i])){
			count +=1;
		}
		i +=1;
	}
	return count;
}

function countVowelsRecursive(input, charCount){
	//Base case
	if(charCount == 1){
		return Number(isVowel(input[0]));
	}
	
	const nextInput = input[charCount -1];
	
	//Recursive case
	return countVowelsRecursive(input, charCount - 1) + isVowel(nextInput);
}

//Test
const myInput = 'Code Interview';
//const myInput = 'Educative';
//console.log(`Time: `, new Date().toISOString());
console.log(`Iterative: `,countVowelsIterative(myInput));
console.log(`Recursive:`,countVowelsRecursive(myInput, myInput.length));