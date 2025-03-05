const product = {
    title : "Ball Pen",
    rating : 4,
    offer : 5,
    price : 270,
};
console.log(product);
console.log(typeof product);
console.log("abcd"+123);
console.log("321"+123);

const profile = {
    username : "@himanshu_shete",
    isFollow : false,
    followers: 123,
    following: 123,
};

//Operaters and Conditionals
/*
    this is a 
    multiLine comment
*/

//Operators : some operation on data
//arthmeticOperators: +,-,*,/,%,**(exponentation),++,--(unaryOperators(++,--))
//assignmentOperators: =,+=,-=,*=,%=,**=;
//comparisonOperators: ==,!=, ===(equalto&type), !==
//                      >, >=, <,<=;
//logicalOperators: &&, ||, !;
{
    let a=5;
    let b="5";
    console.log("a==b", a==b); //true
    console.log("a===b", a===b); //false
};

//conditionlStatements : if, else, else if

//ternaryOperators
//              condition?trueoutput:falseoutput;

{
    let age=16;
    let result = age >=18 ? "adult" : "notadult";
    console.log(result);
};

//loops is js

for(let count=1; count<=5; count++){
    console.log("hello!");
};

console.log(count); //gives undefined cuz let is block specific

for(var count=0;count<5;count++){
    console.log("hi!");
}
console.log(count); //gives output i

//

let i=1;
do{
    console.log("Bye!");
    i++;
} while(i<=10);

//for-of loop
let str= "himanshu";
for(let i of str){
    //iterator -> characters
    console.log("i=", i);
}

//for-in loop
let student = {
    name: Rahul,
    cgpa: 7.5,
    isPass : true,
}
for (let key in student){
    console.log("key=",key, " value=", student[key]);
}