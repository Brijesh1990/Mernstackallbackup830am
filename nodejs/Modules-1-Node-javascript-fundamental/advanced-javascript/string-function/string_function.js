/* string functions ?
string function is a inbuild function in JavaScript that is used to manipulate strings. It provides various methods to perform operations such as searching, replacing, and formatting strings.


*/

function stringFunctionExample() {
  let str = 'Hello, World!';

  // Convert to uppercase
  let upperStr = str.toUpperCase();
  console.log(upperStr); // "HELLO, WORLD!"

  // Convert to lowercase
  let lowerStr = str.toLowerCase();
  console.log(lowerStr); // "hello, world!"

  // Find the index of a substring
  let index = str.indexOf('World');
  console.log(index); // 7

  // Replace a substring
  let newStr = str.replace('World', 'JavaScript');
  console.log(newStr); // "Hello, JavaScript!"

  // Split the string into an array
  let words = str.split(', ');
  console.log(words); // ["Hello", "World!"]

  // Trim whitespace from both ends
  let trimmedStr = '   Hello, World!   '.trim();
  console.log(trimmedStr); // "Hello, World!"

  // Check if the string starts with a substring

  let startsWithHello = str.startsWith('Hello');
  console.log(startsWithHello); // true
  // Check if the string ends with a substring
  let endsWithWorld = str.endsWith('World!');
  console.log(endsWithWorld); // true
  // Repeat the string
  let repeatedStr = str.repeat(2);
  console.log(repeatedStr); // "Hello, World!Hello, World!"

  // Get the length of the string
  let length = str.length;
  console.log(length); // 13
  // Extract a substring

  let substring = str.substring(0, 5);
  console.log(substring); // "Hello"

  // Check if the string includes a substring
  let includesWorld = str.includes('World');
  console.log(includesWorld); // true
  // Convert to a string (if not already)

  let num = 123;
  let numStr = String(num);
  console.log(numStr); // "123"

  // Template literals for string interpolation
  let name = 'Alice';
  let greeting = `Hello, ${name}!`;
  console.log(greeting); // "Hello, Alice!"

  // Escape characters in strings
  let escapedStr = 'He said, "Hello, World!"';
  console.log(escapedStr); // He said, "Hello, World!"
  // Check if the string is empty
  let isEmpty = str === '';
  console.log(isEmpty); // false
  // Convert a string to an array of characters
  let charArray = Array.from(str);
  console.log(charArray); // ["H", "e", "l", "l", "o", ",", " ", "W", "o", "r", "l", "d", "!"]

  // Repeat a string multiple times
  let repeated = 'abc'.repeat(3);
  console.log(repeated); // "abcabcabc"

  // Convert a string to a number
  let numFromStr = parseFloat('123.45');
  console.log(numFromStr); // 123.45

  // Convert a number to a string
  let numToStr = (456).toString();
  console.log(numToStr); // "456"

  // Check if a string is a valid number
  let isValidNumber = !isNaN(numFromStr);
  console.log(isValidNumber); // true
  // Check if a string is a valid integer
  let isValidInteger = Number.isInteger(parseInt('123'));
  console.log(isValidInteger); // true
}

stringFunctionExample();
// This function demonstrates various string manipulation methods in JavaScript.
// It includes converting case, searching, replacing, splitting, trimming, and more.
