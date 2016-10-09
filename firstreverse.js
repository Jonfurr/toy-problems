function FirstReverse(str) { 
	var result="";
  for (var i = str.length - 1; i >= 0; i--){
  	result += str[i]
  } 
  return result;       
}
   
// keep this function call here 
FirstReverse("Argument goes here");   