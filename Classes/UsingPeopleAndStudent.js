//Catching Class People and Student in People and Student variable respectively
const People=require('./People')
const Student=require('./Student')

let people = new People('Rohit','Sharma')

console.log(people.age)
console.log(people.location)
console.log(people.fullname())


let student = new Student('Ishan','Sharma')

console.log(student.age)
console.log(student.location)
console.log(student.fullname())
