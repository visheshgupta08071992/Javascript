//Convert a String to Array

const str = 'Hello';
const arr = Array.from(str);

console.log(arr); // Output: ['H', 'e', 'l', 'l', 'o']

//Remove Duplicates from an Array

let a = [2,2,4,4,5,5,6,7,3,3,9,1,8]

let b = Array.from(new Set(a))
console.log(b) 

/* [
  2, 4, 5, 6, 7,
  3, 9, 1, 8
] */

//Mapping array elements
const nums = [1, 2, 3, 4];
const multiplied = Array.from(nums, (num) => num * 2);

console.log(multiplied); // Output: [2, 4, 6, 8]

