/* 
  Object in JavaScript is collection of properties
  Properties are defined as Key-Value pair, key is always a String while Value could be of any dataType
*/

// Creating Object with different dataTypes

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

//Retrieving the values of each key of an Object

console.log(person.name) // Rohit
console.log(person.intrests[1]) // footbal

console.log(person.address.state) // Maharashtra

//Retrieving the values of each key of an Object in Array Style

console.log(person["name"]) // Rohit
console.log(person["intrests"][1]) // footbal

console.log(person["address"].state) // Maharashtra

// Adding a key to Object person and check the key is added

person.gender = "male"

console.log(person)

/* {
    name: 'Rohit',
    age: 25,
    isPlayer: true,
    intrests: [ 'cricket', 'footbal' ],
    address: { city: 'Mumbai', state: 'Maharashtra' },
    gender: 'male'
  } */

  console.log('gender' in person) //true

  // Deleting a key from Object and check the key does not exist

  delete person.gender

  console.log('gender' in person) //false


/* Getting all the keys of Object using Object.keys() method */

let personKeys = Object.keys(person)
console.log(personKeys)  // [ 'name', 'age', 'isPlayer', 'intrests', 'address' ]

/* Getting all the values of Object using Object.values() method */

let personValues = Object.values(person)
console.log(personValues) 

/* [
    'Rohit',
    25,
    true,
    [ 'cricket', 'footbal' ],
    { city: 'Mumbai', state: 'Maharashtra' }
  ] */


 /* Getting all the key and values of Object in a nested array using Object.entries() method */ 

 let entries = Object.entries(person)
 console.log(entries)

 /* 
 
 [
  [ 'name', 'Rohit' ],
  [ 'age', 25 ],
  [ 'isPlayer', true ],
  [ 'intrests', [ 'cricket', 'footbal' ] ],
  [ 'address', { city: 'Mumbai', state: 'Maharashtra' } ]
]
 
 */



/* 
   Iterate Objects in Javascript.
   There are several ways to iterate Objects in Javascript.

   1.Using for..in loop
   2.Using Object.keys
   3.Using Object.entries

*/


// Using for..in

const person1 = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  for (let key in person1) {
    console.log(key + ": " + person1[key]);
  }
  
/* 
name: John
age: 30
city: New York

*/


// Using Object.keys

const person2 = {
    name: "John",
    age: 30,
    city: "New York"
  };

 let keys=Object.keys(person2)
 
 for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    console.log(key + ": " + person2[key]);
  }
  
  /* 
name: John
age: 30
city: New York

*/

// Using Object.entries

const person3 = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  const entries1 = Object.entries(person3);
  
  for (let i = 0; i < entries1.length; i++) {
    const [key, value] = entries1[i];
    console.log(key + ": " + value);
  }
 
    /* 
name: John
age: 30
city: New York

*/