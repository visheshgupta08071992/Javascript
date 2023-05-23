//Declaring and initializing Array using 1st Way
let a=new Array(6)
for(let i=0;i<a.length;i++){
    a[i] = i
}
console.log(a) // [ 0, 1, 2, 3, 4, 5 ]

/*To add and remove element from end push and pop methods are used respectively  
  -push adds element to end of array
  -pop removes element  from end of array */

a.push(6)
console.log(a) //[ 0, 1, 2, 3, 4, 5 ,6]

a.pop()
console.log(a)  //[ 0, 1, 2, 3, 4, 5]


/*To add and remove element from start unshift and shift methods are used respectively  
  -unshift adds element to start of the array
  -shift removes element from start of the array*/

a.unshift(-1)
console.log(a) //[ -1,0, 1, 2, 3, 4, 5]


a.shift()
console.log(a) //[ 0, 1, 2, 3, 4, 5]


/*To add,remove or replace an  element in middle of an array we need to use splice method

Syntax: array.splice(startIndex, deleteCount, item1, item2, ..., itemX)

Parameters:

- `startIndex`: An integer value that specifies the position where to start adding or removing elements in the array (required).
- `deleteCount`: An integer value that specifies the number of elements to be removed from the array (optional). If set to 0, no elements are removed.
- `item1, item2, ..., itemX`: The elements to be added to the array (optional).
*/

let fruits = ['apple', 'banana', 'mango', 'orange'];

// removing an element
fruits.splice(1, 1); // remove 'banana'

console.log(fruits); // Output: ['apple', 'mango', 'orange']

// adding an element
fruits.splice(1, 0, 'pear'); // add 'pear' at index 1

console.log(fruits); // Output: ['apple', 'pear', 'mango', 'orange']

// replacing an element
fruits.splice(2, 1, 'grape'); // replace 'mango' with 'grape'

console.log(fruits); // Output: ['apple', 'pear', 'grape', 'orange']


/*The slice() method in JavaScript allows us to extract a section of an array and return it as a new array.

Syntax - array.slice(startIndex, endIndex)

Parameters:

startIndex: Required. Specifies the index position where the extraction should begin. This parameter is inclusive (i.e., the element at this index position will be included in the new array).
endIndex: Optional. Specifies the index position where the extraction should end. This parameter is exclusive (i.e., the element at this index position will not be included in the new array). If you omit this parameter, slice() will extract all elements from the startIndex to the end of the array.

*/

const fruit = ['apple', 'banana', 'cherry', 'orange', 'watermelon']

// Extract elements from index 1 to index 3 (exclusive) and store them in a new array
const selectedFruits = fruit.slice(1, 3)

console.log(selectedFruits) // Output: ['banana', 'cherry']

/* concat() method is used to combine two or more array and return a new Array */

let arr1=[1,2,3]
let arr2=[4]
let arr3=[5,6]

arr4 = arr1.concat(arr2).concat(arr3)

console.log(arr4) // [1,2,3,4,5,6]

/* Sorting an Array
   -Array of String can be sorted in ascending order using sort method
   -Array of string can be sorted in descending prder using reverse method
   -To sort Array of integer we need to pass comparator within sort method
*/

let arr5=[ 'banana', 'cherry', 'apple', 'watermelon','orange']

//Sort in ascending order
arr5.sort()
console.log(arr5) // [ 'apple', 'banana', 'cherry', 'orange', 'watermelon' ]

//Sort in descending order
arr5.reverse()
console.log(arr5) // [ 'watermelon', 'orange', 'cherry', 'banana', 'apple' ]

let arr6=[6,5,4,3,2,1]

//Sort in ascending order
arr6.sort((a,b) => a-b)
console.log(arr6) //[ 1, 2, 3, 4, 5, 6 ]

//Sort in descending order
arr6.sort((a,b) => b - a)
console.log(arr6) //[ 6, 5, 4, 3, 2, 1 ]

/*  
  The forEach() method in JavaScript is used to loop over the elements of an array and perform a specific action for each element. 
  It allows you to iterate through an array and execute a function on each element.

  Syntax - array.forEach(callbackFunction)

*/

const numbers = [1, 2, 3, 4, 5];

numbers.forEach((currentValue) => console.log(currentValue));

// Output:
// 1
// 2
// 3
// 4
// 5



/* 
   
  The reduce() method is a built-in method in JavaScript that allows you to calculate a single value from an array of values. 
   You can use it to sum up all the elements in an array, find the maximum or minimum value, or perform any other kind of calculation that reduces an array to a single value.

   Syntax - array.reduce(callbackFunction, initialValue)

   Parameters:

   callbackFunction: This is a function that you provide, which will be called for each element of the array. 
   It takes four parameters: accumulator, currentValue, currentIndex, and array. The accumulator is the value that accumulates the results, 
   and currentValue is the current element being processed. The currentIndex is the index of the current element, and array is the original array.
   
   initialValue: This is an optional parameter. It specifies the initial value of the accumulator. 
   If you don't provide it, the first element of the array will be used as the initial value, and the reduction starts from the second element.

 */


 //Find sum of all elements of an array using reduce method
 
 let marks=[1,2,3,4,5]

 let sum = marks.reduce((accumulater,marks) => accumulater + marks,0)

 console.log(sum) // 15

 //Find Max of all elements using reduce

 let max = marks.reduce((a,b) => a>b?a:b)

 console.log(max) //5

  //Find Min of all elements using reduce

  let min = marks.reduce((a,b) => a>b?b:a)

  console.log(min) // 1


 /* 
   The filter() method in JavaScript is used to create a new array that contains elements from an existing array that pass a certain condition. 

   Syntax - array.filter(callbackFunction)

 */ 

 
 //Print all even nos from an array using filter method
 
 let nos =[1,2,3,4,5,6]

 nos.filter((a) => a%2==0).forEach(a => console.log(a)) // 2 4 6

  //Print all odd nos from an array using filter method

  let oddNos =  nos.filter((a) => a%2!=0)

  console.log(oddNos) // 1,3,5


 /* 
    The map() method  is used  transform the elements of the array and create a new array based on the transformations.
 
    Syntax - array.map(callbackFunction) 
 
 */ 

 // Find squares of No using Map method in Javascript
 
 let no=[1,2,3,4,5]

 let sqrNo = no.map((e) => e*2)

 console.log(sqrNo) // [ 2, 4, 6, 8, 10 ]

 /* 
    The flatMap() method is used to transform a nested array into single array
 
    Syntax - array.flatMap(callbackFunction)

 */

//Transform the below nested array into single array    

let nestedArray = [[1,2],[3,4],[5,6]]

let singleArray = nestedArray.flatMap((e) => e)

console.log(singleArray) // [ 1, 2, 3, 4, 5, 6 ]

//Split each word of an array into individual characters using flatMap

const words = ["hello", "world", "javascript"];

const characters = words.flatMap((currentValue) =>  currentValue.split(""));

console.log(characters); // Output: ["h", "e", "l", "l", "o", "w", "o", "r", "l", "d", "j", "a", "v", "a", "s", "c", "r", "i", "p", "t"]
