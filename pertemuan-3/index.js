//JavaScript Function

//1. Func. Declaration
function sayHello(fullName) {
  return "Hello " + fullName;
}
let output = sayHello("John"); //Call / Invoke
console.log(output);

//2. Func. Expression
let sayHello2 = function (fullName) {
  return "Hello " + fullName;
};
let output2 = sayHello2("Bob"); //Call / Invoke
console.log(output2);

//3. IIFE (Immediately Invoked Function Expression)
// Self-executing anonymous function
let output3 = (function (fullName) {
  return "Hello " + fullName;
})("IIFE");

console.log(output3);

//4. Callback Function
//is a function passed as an argument to another function
function sayHello3(callback) {
  let result = callback("Callback Function");
  return result;
}

let output4 = sayHello3(function (fullName) {
  return "Hello " + fullName;
});

console.log(output4);
