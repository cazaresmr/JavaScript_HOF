// Write a function that takes in a number parameter and returns a function that adds the number parameter with a new number parameter.

// Declare a function plus that takes in a number parameter.
// Inside the body of plus, use the return keyword to return an anonymous function
// The return function will take in a plusNumber parameter, and return the value of plusNumber with the first parameter number
// Next, declare a variable plus15 that is assigned the value of plus with 15 passed in
// console.log the result of plus15 with 10 passed in
// End result should resemble: console.log(plus15(10)) // Outputs 25

console.log("EXERCISE 1:\n==========\n");
const plus = (number) => {
  return (plusNumber) => number + plusNumber;
};
const plus15 = plus(15);
console.log(plus15(10)); // 25

console.log("");
console.log("EXERCISE 2:\n==========\n");
// Exercise 2: forEach
// Use the Array forEach method to print the names of each user within the list. Start with the following code:

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
// Exercise 3: map
// Use the Array map method to return a new array just containing objects with names and scores. Start with the previously defined users array.

let userNamesAndScores = users.map((user) => {
  return { name: user.name, score: user.score };
});
console.log(userNamesAndScores);

console.log("");
console.log("EXERCISE 4:\n==========\n");
// Exercise 4: filter
// Use the Array filter method to return a new array that only contains users that are listed as active. Start with the previously defined users array.

let activeUsers = users.filter((user) => {
  return user.isActive;
});
console.log(activeUsers);

console.log("");
console.log("EXERCISE 5:\n==========\n");
// Exercise 5: sort
// Use the Array sort method to sort the users array in-place with the users sorted in descending order by score. Start with the previously defined users array.

users.sort((a, b) => {
  return b.score - a.score;
});
console.log(users);

console.log("");
console.log("EXERCISE 6:\n==========\n");
// Exercise 6: reduce
// Use the Array reduce method to return sum of all users' scores. Once you have the sum of all scores, find the average score from the users. Start with the previously defined users array.

let totalScore = users.reduce((acc, user) => {
  return acc + user.score;
}, 0);
console.log(totalScore);
let averageScore = totalScore / users.length;
console.log(averageScore);
