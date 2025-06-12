//Rest Parameter dan Spread Operator

//Tanpa rest parameter
// const func1 = (param1, param2, param3, param4, param5) => {
//   console.log(param1, param2, param3, param4, param5);
// };

// func1(1, 2, 3, 4, 5);

//Dengan rest parameter
// const func2 = (param1, param2, ...params) => {
//   console.log(params);
// };

// func2(1, 2, 3, 4, 5);

//Spread Operator
// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers);
// console.log(...numbers);

//1. Duplikasi Array
// const numbers2 = [...numbers, 6, 7, 8];
// console.log(numbers2);

//Pada Array
//2. Menggabungkan Array
// const numbers1 = [1, 2, 3];
// const numbers2 = [6, 7, 8];
// const numbers3 = [9, 10, 11];

// // const combineNumbers = numbers1.concat(4, 5, numbers2, numbers3);
// const combineNumbers = [...numbers1, 4, 5, ...numbers2, ...numbers3];
// console.log(combineNumbers);

// //Pada Object
// const john = {
//   fullName: "John Doe",
//   age: 30,
// };

// //1. Duplikasi Object
// const john2 = { ...john, address: "Airmadidi" };
// console.log(john2);

// //2. Menggabungkan Object
// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };
// const combineObj = { ...obj1, ...obj2 };

//Destructuring Array & Object
const numbers = [1, 2, 3, 4, 5];

//Tanpa destructing es6
// const num2 = numbers[1];

// const num3 = numbers[2];

// const num5 = numbers[4];

//Pada Array
//Dengan destructing es6
// const [num1, , num3, , num5] = numbers;
// console.log(num1);
// console.log(num3);
// console.log(num5);

//Destructuring dengan rest parameter
// const [angka1, ...rest] = numbers;
// console.log(angka1);
// console.log(rest);

//Pada Object
const john = {
  fullName: "John Doe",
  age: 30,
  status: "active",
  address: "Airmadidi",
};

// const fullName = john.fullName; //Tanpa Destructuring

//Dengan destructuring
const { fullName, age, address: alamat } = john;
// console.log(fullName, age, alamat);

const sayGreetings = ({ fullName, age }) => {
  console.log(fullName);
  console.log(age);
};

sayGreetings(john);
