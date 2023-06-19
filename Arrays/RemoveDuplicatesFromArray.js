let a = [2,2,4,4,5,5,6,7,3,3,9,1,8]

let b = new Set(a)
console.log(b) // Set(9) { 2, 4, 5, 6, 7, 3, 9, 1, 8 }

//Remove duplicates and display the output in Array Form

let c = Array.from(b)
console.log(c) 
/*[
    2, 4, 5, 6, 7,
    3, 9, 1, 8
  ]*/