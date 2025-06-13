const fullName = "John Doe";

const numbers = [1, 2, 3, 4, 5];

const john = { fullName: "John Doe", age: 30 };

const sayGreetings = () => {
  console.log("Hello World");
};

export { fullName, numbers as angka, john }; //Front-end
export default sayGreetings;
//Cara export dari Back-end
// module.exports = {
//   fullName,
// };
