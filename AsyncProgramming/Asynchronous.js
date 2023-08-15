/*
 Asyncronous Programming is executing Program parallely 
*/

console.log(1)
console.log(2)

//setTimeOut takes a callback function and sets the timeOut in Milliseconds
//The below function would Print 3 after 2 seconds, Till then 4 and 5 would be printed.
setTimeout(()=>console.log(3),2000)
console.log(4)
console.log(5)

/*
1
2
3
4
5

*/ 