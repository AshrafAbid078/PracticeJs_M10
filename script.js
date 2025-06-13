//  Count vowels
function countVowels(str) {
  const vowels = 'aeiouAEIOU';
  return [...str].filter(char => vowels.includes(char)).length;
}

// Sort numbers in ascending order
function sortNumbers(arr) {
  return arr.sort((a, b) => a - b);
}

//  Reverse a string
function reverseString(str) {
  return str.split('').reverse().join('');
}

//  Get the last element of an array
function getLastElement(arr) {
  return arr[arr.length - 1];
}

// Merge two arrays
function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}

//  Check if a string has space
function hasSpace(str) {
  return str.includes(' ');
}

//  Check if a string is empty
function isEmptyString(str) {
  return str === '';
}

//  Remove negative numbers from array
function removeNegativeNumbers(arr) {
  return arr.filter(num => num >= 0);
}

// Example Test Outputs

console.log("countVowels('Your Name') =>", countVowels("Your Name")); 
console.log("sortNumbers([4, 1, 8, 3]) =>", sortNumbers([4, 1, 8, 3])); 
console.log("reverseString('hello') =>", reverseString("hello")); 
console.log("getLastElement([10, 20, 30, 40]) =>", getLastElement([10, 20, 30, 40]));
console.log("mergeArrays([1, 2], [3, 4]) =>", mergeArrays([1, 2], [3, 4]));
console.log("hasSpace('Ostad Limited') =>", hasSpace("Ostad Limited")); 
console.log("isEmptyString('') =>", isEmptyString("")); 
console.log("isEmptyString('Hello') =>", isEmptyString("Hello")); 
console.log("removeNegativeNumbers([-5, 2, -1, 6, 0]) =>", removeNegativeNumbers([-5, 2, -1, 6, 0])); 
