function isPalindrome(word) {
  // Write your algorithm here
  //reverse the input string
  const reversedWord = reverseString(word);
  //If the reversed string is the same as input
  return word === reversedWord;
  }
function reverseString(word) {
  return word.split("").reverse().join("")
}
/* 
  Add your pseudocode here
  Reverse the input string
  
  If the reversed string is the same as the input, return true
  else 
  return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));
  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));
  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));
  console.log("Expecting: ih");
  console.log("=>", reverseString("hi"));
  
  console.log("");
  
  console.log("Expecting: tobor");
  console.log("=>", reverseString("robot"));
  
  console.log("");
  
  console.log("Expecting: mom");
  console.log("=>", reverseString("mom"));


}

module.exports = isPalindrome;
