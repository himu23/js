{
    console.log("hello");
    myint =9;
    console.log(myint);
    myname= "himanshu";
    console.log(myname);
    x=null;
    y=undefined;
    console.log(x);
    console.log(y);
    totalPrice=99.99; //camelCase
}

//var= variable can be redeclared or updated. a global scope variable
//let= variable cannot be redeclared but can be updated. a block scope variable.  //block: { }
//const= varable cannot be redeclared or updated. a block scope variable.

{
    let myName="himanshu"
    var age=18;
    var age=20;
    var age=22;
    console.log(age);
    // let age=18;
    // let age=20; //gives error
    let Age=22;
    console.log(age);

    let a="hey"; //without giving any initial value works
    //const a; //gives error

    let b= null;

    console.log(typeof a); //string
    console.log(typeof b); //object

    //data types: number, string, boolean, undefined, null, bigint, symbol;
    
}

