const People=require('./People')

module.exports=class Student extends People{

    /* 
       If parent class has any constructor then your child class 
       should also implement similar constructor
    */ 
    constructor(firstname,lastname){
        
        /* Another rule is you have to call your parent class constructor
           as first step in child class constructor
        */
        super(firstname,lastname)
    }

    get location(){
        return 'America'
    }

}