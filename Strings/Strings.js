//Declaring String

let day='tuesday'

//Printing the length
console.log(day.length) //7

//Finding substring using slice method, Staring index is inclusive, End Index is exclusive

let partialString=day.slice(1,4) 
console.log(partialString) // ues

//Finding substring using subString method, Staring index is inclusive, End Index is exclusive

let partialString1=day.substring(1,4)
console.log(partialString1) // ues

/* Finding the character at specified index */

console.log(day[0]) // t
console.log(day.charAt(0)) // t


/* 
   split() - Splits a string into an array of substrings 
    based on a specified separator and returns the array.

*/

let str='Hi are you listening'

let strArr=str.split(" ")

console.log(strArr) // [ 'Hi', 'are', 'you', 'listening' ]

/* trim() - Removes whitespace from both ends of a string. */

let str1 = "   Hello   "

console.log(str1.length) // 11
//After trimming

console.log(str1.trim().length) // 5

/* 
   parseInt is used for converting String to a No 
   toString is used for converting No to a String
*/

let a = '25'
let b = '50'

let c = parseInt(a) + parseInt(b)

console.log(c) //75

//Convert no to String
let d = c.toString()
console.log(d + " is " + typeof(d)) // 75 is String


/*concat two string using either concat method or + operator  */

let s1 = 'day'

s2 = s1 + " is funday"

console.log(s2) // day is funday

let m1 = 'day'

m2 = m1.concat(" is funday")

console.log(m2) // day is funday