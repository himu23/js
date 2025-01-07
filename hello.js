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
    //primitive data types
    //non-primitive data types:- objects, arrarys, functions
    //object: collection of values(which are primitive data types)
    //objects generally declared by const
    
}

const student={
    fullName : "Rahul Kumar",
    age : 20,
    cgpa : 8.2,
    isPass : true,
    //key : value,
};

console.log(student.age);
console.log(student["cgpa"]);
student["age"]=student["age"]+1;
console.log(student["age"]);