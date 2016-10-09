//---- Palindrome ----//

//The function Palindrome should recieve the 'str' parameter being passed and return true if the parameter is a palindrome, (the string is the same forward as it is backward) otherwise return false. 
//For example: "racecar" is also "racecar" backwards.

function Palindrome (str) {
	str=str.toLowerCase();
	str = str.replace(/\s+/g, '');
	var splitString = str.split("");
	var reverseArray = splitString.reverse();
	var joinArray = reverseArray.join("");
 
  	if (str == joinArray) {
  		console.log("true");
  		return true;
  	}
  	else{
  		console.log("false");
  		return false
  	}
}
Palindrome("yo banana boy");
