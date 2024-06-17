console.log("EXERCISE 1:\n==========\n");

const plus = (number) => {
  return (plusNumber) => number + plusNumber;
};
const plus15 = plus(15);
console.log(plus15(10)); // 25

console.log("");
console.log("EXERCISE 2:\n==========\n");

let users = [
  {
    name: "Frodo",
    age: 50,
    score: 85,
    isActive: false,
  },
  {
    name: "Sam",
    age: 38,
    score: 94,
    isActive: true,
  },
  {
    name: "Merry",
    age: 36,
    score: 82,
    isActive: true,
  },
  {
    name: "Pippin",
    age: 26,
    score: 77,
    isActive: false,
  },
];

users.forEach((user) => {
  console.log(user.name);
});

console.log("");
console.log("EXERCISE 3:\n==========\n");

let userNamesAndScores = users.map((user) => {
  return { name: user.name, score: user.score };
});
console.log(userNamesAndScores);

console.log("");
console.log("EXERCISE 4:\n==========\n");

let activeUsers = users.filter((user) => {
  return user.isActive;
});
console.log(activeUsers);

console.log("");
console.log("EXERCISE 5:\n==========\n");

users.sort((a, b) => {
  return b.score - a.score;
});
console.log(users);

console.log("");
console.log("EXERCISE 6:\n==========\n");

let totalScore = users.reduce((acc, user) => {
  return acc + user.score;
}, 0);
console.log(totalScore);
let averageScore = totalScore / users.length;
console.log(averageScore);
console.log("");
