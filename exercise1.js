const plus = (number) => {
  return (plusNumber) => number + plusNumber;
};
const plus15 = plus(15);
console.log(plus15(10));
