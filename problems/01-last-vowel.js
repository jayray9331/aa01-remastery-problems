/*
Write a function `lastVowel(str)` that takes in a string and returns the last
vowel that appears sequentially in the string. Note that the string may contain
capitalization.

Hint: You may find the `String.toLowerCase` or `String.toUpperCase` methods useful.

String.toLowerCase: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
String.toUpperCase: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/


/*
Write a function `lastVowel(str)` that takes in a string and returns the last
vowel that appears sequentially in the string. Note that the string may contain
capitalization.

Hint: You may find the `String.toLowerCase` or `String.toUpperCase` methods useful.

String.toLowerCase: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
String.toUpperCase: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/


 let lastVowel = function(str) {
    let vowels = 'aeiou';
  
    for (let index = str.length - 1; index >= 0; index--) {
         let letter = str[index];
         if (vowels.includes(letter.toLowerCase()))  {
      		return letter;
    }
  }
  
  return null;
};
      


console.log(lastVowel('battery')); // 'e'
console.log(lastVowel('TUNNEL')); // 'E'
console.log(lastVowel('dog')); // 'o'
console.log(lastVowel('conventional')); // 'a'
console.log(lastVowel('rhythm')); // null

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = lastVowel;
  } catch (e) {
    module.exports = null;
  }


console.log(lastVowel('battery')); // 'e'
console.log(lastVowel('TUNNEL')); // 'E'
console.log(lastVowel('dog')); // 'o'
console.log(lastVowel('conventional')); // 'a'
console.log(lastVowel('rhythm')); // null

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = lastVowel;
  } catch (e) {
    module.exports = null;
  }
