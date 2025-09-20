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
    name: "rahul",
    cgpa: 7.5,
    isPass : true,
}
for (let key in student){
    console.log("key=",key, " value=", student[key]);
}

//strings
{
    let str="himanshu";
    let num=str.length;
    console.log(str,num,str[2]);
}


let obj={
    item: "pen",
    price: 10,
};

console.log(`the cost of ${obj.item} is ${obj.price} rupees`); //template literal //10(int) is also a string
console.log("the cost of", obj.item, "is", obj.price, "rupees"); //10(int) is outputed as int.
console.log(`this is a template literal ${1+2+3}`);

//  //template literals
// a way to have embedded expressions in strings
//${} is called string interpolation

let specialString=`This is a template literal`;
console.log(specialString);
console.log(typeof specialString);  //string


//template literals (\n) newline (\t) tab
console.log("himanshu\nshete");
console.log("himanshu\tshete");

{
    let str= "hi\tbye";
    console.log(str.length); //6
}

//string method : these are built in functions to manipulate a string
//length is property but toUpperCase is method

{
    let str = "  Himan shu ";
    str.toUpperCase(); 
    console.log(str); //himanshu
    let newStr = str.toUpperCase();
    console.log(newStr);
    console.log(str.toLowerCase());
    console.log(str.trim()); //removes white spaces outside of the string
    //str.slice(start, end?)  //returns part of string
    console.log(str.slice(1,6)); //does not include last index
    console.log(str.slice(2));
    
    let str1="himanshu";
    let str2="shete";
    console.log(str1.concat(str2)); //joins str2 with str1;

}

// str.replace(searchVal, newVal);
{
    let str= "hellololo";
    console.log(str.replace("lo","p"));
    console.log(str.replaceAll("lo","p"));
    let str1=str.replace("lo","p");
    console.log(str1);

    //str.charAt(idx)
    let str2="ILoveJS";
    // str[0]="S"; wont work
    str2=str2.replace("I" , "S");
    console.log(str2);
    console.log(str2.charAt(2));
    console.log(str2[2]);
}

// array  : in js arrays internally are a type of objects
{
    
}