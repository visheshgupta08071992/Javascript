/*
 Nesting a Function inside another function are called Callbacks
 When doing a complex task, we break that task down into smaller steps. To help us establish a relationship between these steps according to time (optional) and order, we use callbacks
*/

/*

In the below example, Order function taked delivery function as argument and invokes delivery function
Once order is completed
*/

let order = (delivery) =>{
  console.log("Order Placed")
  delivery()
}

let delivery =() =>{
    console.log("Delivery started")
}

order(delivery)