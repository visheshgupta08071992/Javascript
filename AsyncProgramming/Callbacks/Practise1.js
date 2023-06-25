let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };

 let isShopOpen=false

 let order = (time,production) =>{ 
     return new Promise((resolve,reject) => {
        if(isShopOpen){
            setTimeout(() =>{
                resolve(production())
            },time)
        }
        else{
            reject(console.log("Shop is closed"))
        }
     })
 }

 

 order(2000,() => console.log(`${stocks.Fruits[1]} is selected`))

 .then(() => order(2000,() => console.log(`Productions is started`)) )
 .then(() => order(2000,() => console.log(`Fruit is chopped`)) )
 .then(() => order(2000,() => console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)) )
 .then(() => order(2000,() => console.log(`The Machine was started`)) )
 .then(() => order(2000,() => console.log(`Icecream was placed on cone`)) )
 .then(() => order(2000,() => console.log(`Served Icecream`)) )
 .catch(() => console.log("Customer Left"))
 .finally(() => console.log("Day Ended"))