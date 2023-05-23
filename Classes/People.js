/* 
  Classes in Javascript are introduced in ES6 Engine 

  Classes is preferred over objects as with help of one prototype of class 
  we could create n different object

*/

// module.exports is used for exporting class so that it could be used in another files

module.exports=class People
{
    //First way of defining property
    age = 25

    /*Defining property using getter method, if we add get infront of method 
    then that is treated as property */
    get location(){
        return 'Canada'
    }

    //constructor
    constructor(firstname,lastname){
       this.firstname = firstname
       this.lastname = lastname
    }

    //Class Method
    fullname(){
        return this.firstname + this.lastname
    }
}