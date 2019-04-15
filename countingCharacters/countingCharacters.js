function countingCharacters(stringToCount) {
  console.log(stringToCount + "has" + stringToCount.length + "characters");
}

function countingCharacters2(stringToCount, characterToFind){
    // Let's count the number of times a character appears in a string
    // We will look at each character one-by-one with the help of a for loop
    var characterCount = 0;
    for (var characterPosition = 0;
           characterPosition < stringToCount.length;
           characterPosition++){
        if (stringToCount[characterPosition] == characterToFind){
            characterCount++;
        }
    }
    console.log("String to search in: " + stringToCount);
    console.log("Character to find: " + characterToFind);
    console.log("Number of times the character appears: " +
                  characterCount);
}

function countingCharacters3(str, search){
  var count = 0; //number found
  var numChars = search.length;
  /* we need to stop loop based on multiple characters. example:
  if searching "Ohio" with 3 characters at a time we want to stop at
  h so we do not go pas the end of the string */
  var lastIndex = str.length - numChars;
  //we will use a for loop to go through our string
  //this time, we are looking for a series of characters - a substring
  for (var index = 0; index <= lastIndex; index++){
    //substring gets a part of a string from a start to end index
    var current = str.substring(index, index + numChars); //if the substring matches our series, increase our counter
  if (current == search) {
    count++
    }
  }
  // console.log("String to search in: " + str);
  // console.log("Character to find: " + search);
  // console.log("Number of times the character appears: " + count);
  return count;
}
