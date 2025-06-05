//Array dan Object
//Deklarasi Array
//Cara 1. Array literals
// let numbers = [1, 2, 3, 4, 5];
// //Cara 2. Kata new
// let numbers2 = new Array(1, 2, 3, 4, 5);

// //Tipe data dalam array
// let numbers3 = [1, 2, 3, 4, 5]; //numbers
// let students = ["John", "Jane", "Bob"]; //String
// // let john = ["John", 30, true, [80, 90, 100]]; //Campuran

// console.log(numbers3);
// console.log(students);
// // console.log(john);

// //Mengakses elemen dalam array
// //Melalui index
// console.log(students[1]);
// // console.log(john[3][1]);
// john[1] = 31;
// // console.log(john);

// //Mengakses elament terakhir di array
// console.log(students.length);
// console.log(students[students.length - 1]);

// //Array method
// let array = [1, 2, 3, "halo", false, true];
// console.log(array.toString());
// console.log(array.join("-"));

// array.pop(); //menghapus element terakhir
// console.log(array);
// array.push("Selamat pagi"); //menambah element terakhir
// console.log(array);
// array.shift(); //menghapus element pertama
// console.log(array);
// array.unshift("Selamat pagi"); //menambah element pertama
// console.log(array);
// array.splice(3, 0, 4, 5);
// console.log(array);

// let arrAngka = array.slice(1, 5);
// console.log(arrAngka);

// let angka1 = [1, 2, 3, 4, 5];
// let angka2 = [6, 7, 8, 9, 10];
// let gabungAngka = angka1.concat(angka2);
// console.log(gabungAngka);

//Object
let john = {
  fullName: "John Doe",
  age: 31,
  isMarried: true,
  grade: [80, 90, 100],
  address: {
    street: "Jl. Arnold Mononutu",
    city: "Minahasa Utara",
    postalCode: "95371",
  },
  sayGreetings: function () {
    console.log("Hello");
  },
};
console.log(john);

//Cara mengakses element dalam object
//1. Dot notation
console.log(john.address.city);
//2. Bracket notation
console.log(john["address"]["city"]);

john.status = "active";

//Object Method
john.sayGreetings();

delete john.grade;
console.log(john);

//Array Object
let students = [
  {
    id: 1,
    name: "John",
    status: "active",
  },
  {
    id: 2,
    name: "Bob",
    status: "non active",
  },
  {
    id: 3,
    name: "Jane",
    status: "active",
  },
];

for (let i = 0; i < students.length; i++) {
  console.log(students[i].name);
}

//Built-in method Array
students.forEach(function (item, index) {
  console.log(index);
});

let output = students.map(function (item) {
  return item.name;
});

console.log(output);
