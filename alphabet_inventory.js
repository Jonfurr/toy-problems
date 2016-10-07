//---- Alphabet Inventory ----//

//The function alphaCount should take as parameters an alphabet and a text. 
//alphaCount should tally the count of each letter defined in said alphabet (case insensitive), and return the result of this tally.
//For example:    alphabet: |  text:                 |  output:
//          "aBc"     | "aabbccdd"             |  "a:2,b:2,c:2"
//                  "x"       | "X is my friend"       |  "x:1"            
//                  "hue_3"   | "anlecxkac.gpaoo._43_" |  "e:1,_:2,3:1"

  function alphaCount(alphabet, text) {
  var alphabet = alphabet.toLowerCase();
  var text = text.toLowerCase();
  var result = [];
  for (i=0;i<alphabet.length;i++){
    var counter = 0;
    for (j=0;j<text.length;j++){
      
      if (text[j] === alphabet[i]) {
        counter = counter + 1;
      }
    }
    if (counter !== 0) {
      result.push(alphabet[i]+":"+counter);
    }
  }
  
  return String(result);
}


alphaCount("abcdefghijklmnopqrstuvwxyz","Trying to test this toy problem");
