let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };

 let order = (fruitIndex,production) =>{
    setTimeout(() =>{
        console.log(`${stocks.Fruits[fruitIndex]} is selected`)
        production()
    },2000)
 }

 let production = () =>{
    setTimeout(()=>{
    console.log("Production is started")
    
      setTimeout(()=>{
        console.log("Fruit is chopped")

        setTimeout(() => {
          console.log(`${stocks.liquid[0]} and  ${stocks.liquid[1]} was added`)
            setTimeout(() =>{
                console.log("The Machine was started")
                setTimeout(() =>{
                    console.log(`Icecream was placed on ${stocks.holder[0]}`)
                    setTimeout(()=>{
                      console.log(`${stocks.toppings[0]} is used as Toppings`)
                      setTimeout(()=>{
                        console.log("Serve Icecream")
                      },2000)
                    },3000)
                },2000)
            },1000)
        },1000)
    },2000)
    },0000)
 }

 order(0,production)