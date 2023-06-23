/*
 Nesting a Function inside another function are called Callbacks
*/

let order = (delivery) =>{
  console.log("Order Placed")
  delivery()
}

let delivery =() =>{
    console.log("Delivery started")
}

order(delivery)