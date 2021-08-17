console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
const plus = (number) => {
  return (plusNumber) => number + plusNumber;
};

const plus15 = plus(15);

plus15(1);  // 16

console.log(plus15(10));  // 25