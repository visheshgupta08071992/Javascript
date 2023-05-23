/* Different ways of declaring functions in js*/

/* Traditional Way */

function add(a,b){
    return a + b
}

let sum = add(2,3)
console.log(sum) //5

/* Using Anyonmus function -- Function expressions
   
   Only Anyonmus function can be assigned to a variable

*/

// Anyonmus function getting assigned to a variable addNos
let addNos = (a,b) => a+b

let sumOfNo = addNos(5,5)

console.log(sumOfNo) //10