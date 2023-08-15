//1.Creating Clones

const originalArray = [1, 2, 3];
const cloneArray = [...originalArray];

const originalObject = { a: 1, b: 2 };
const cloneObject = { ...originalObject };

console.log(cloneArray) // [ 1, 2, 3 ]
console.log(cloneObject) // { a: 1, b: 2 }

//2. Combining Arrays

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combinedArray = [...array1, ...array2];
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

//3. Combining Objects

const obj1= {a:1,b:2}
const obj2={c:[1,2,3],d:{e:1}}
const objCombine = {...obj1,...obj2} 


console.log(objCombine); // { a: 1, b: 2, c: [ 1, 2, 3 ], d: { e: 1 } }



//4.Find Unique values from Array

const array=[1,2,2,3,4,5,3,6,6]

//Using,Array.from
let uniqueArr= Array.from(new Set(array))

console.log(uniqueArr) // [ 1, 2, 3, 4, 5, 6 ]

//Using Spread Operator

let uniqueArray= [...new Set(array)]

console.log(uniqueArray) // [ 1, 2, 3, 4, 5, 6 ]

//5. Int to String
const num =32

//using toString Method
const numString1 = num.toString()
console.log(numString1 + " is " + typeof(numString1)) // 32 is string

//using ''
const numString2 = num + ''
console.log(numString2 + " is " + typeof(numString2)) // 32 is string
//using String() constructor
const numString3 = String(num)
console.log(numString3 + " is " + typeof(numString3)) // 32 is string

//6. String to int

const s1="53"
const s2= parseInt(s1)
console.log(s2 + " is " + typeof(s2)) // 53 is number

//7. float to int

const s10=54.567
const s20= parseInt(s10)
console.log(s20) // 54

//8. Swap variables

/*

let a=10
let c=20
[a,c] = [c,a]
console.log(a) //20
console.log(c) //10

*/

//9. Verify if an object has a given property

let person = {
    name: 'Rohit',
    age:25,
    isPlayer:true,
    intrests:['cricket','footbal'],
    address:{
        city:'Mumbai',
        state:'Maharashtra'
    }
}
//using hasOwnProperty
console.log(person.hasOwnProperty('name')) //true
console.log(person.hasOwnProperty('hobby')) //false

//using in
console.log('name' in person) //true
console.log('hobby' in person) //false

//10. Check if Array contains specific value

const language =['java','javascript','python']

console.log(language.includes('ruby')) // false
console.log(language.includes('python')) // true


//11. Converting an Array into String

let message =['Hi','Hello','Sumeet']
let mssg = message.join('')
console.log(mssg) // HiHelloSumeet

let messageWithSpace =  message.join(' ')
console.log(messageWithSpace) // Hi Hello Sumeet

//12. Truncate An Array

let numbers= [0,1,2,3,4,5,6,7]
numbers.length=3
console.log(numbers) // [ 0, 1, 2 ]

//13. Check if an array is Empty

let emptyArr=[]
if(emptyArr.length===0){
    console.log('Array is Empty')
}

//14. Checking variable if of particular type

let a=4
let b=78.98
let c="Hello"
let e=true
let g

if(typeof a === 'number'){
    console.log(a + ' is number')
}

if(typeof b === 'number'){
    console.log(b + ' is number')
}

if(typeof c === 'string'){
    console.log(c + ' is string')
}

if(typeof e === 'boolean'){
    console.log(e + ' is boolean')
}

if(typeof g === 'undefined'){
    console.log(g + ' is undefined')
}