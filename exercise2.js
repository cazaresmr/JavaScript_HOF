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

// users.forEach((user) => {
//   console.log(user.score);
// });

// let userNamesAndScores = users.map((user) => {
//   return { name: user.name, score: user.score };
// });
// console.log(userNamesAndScores);

// let activeUsers = users.filter((user) => {
//   return user.isActive;
// });
// console.log(activeUsers);

// users.sort((a, b) => {
//   return b.score - a.score;
// });
// console.log(users);

let totalScore = users.reduce((acc, user) => {
  return acc + user.score;
}, 0);

console.log(totalScore);
