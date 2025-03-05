//alert gives a popup message
alert("hello!");
//prompt gives a popup message and also takes a input;
let userName = prompt("enter your name");
console.log(userName);

let num = prompt("enter a number");
if (num % 5 == 0) {
  console.log(num, "is a multiple of 5");   //comma adds a space
} else {
  console.log(num, "is not a multiple of 5");
}

