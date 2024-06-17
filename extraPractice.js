// Prompts
// forEach: Print out the names and majors of all students.
// filter: Create a new array with students who are older than 21.
// map: Create a new array containing objects with only the name and age of the students.
// reduce: Calculate the total score of all students.
// sort: Sort the students by their score in ascending order.

const students = [
  { name: "Alice", score: 85, age: 20, major: "Computer Science" },
  { name: "Bob", score: 92, age: 22, major: "Engineering" },
  { name: "Charlie", score: 88, age: 21, major: "Fine Arts" },
  { name: "David", score: 95, age: 23, major: "Computer Science" },
  { name: "Eve", score: 79, age: 20, major: "Engineering" },
  { name: "Frank", score: 82, age: 21, major: "Fine Arts" },
  { name: "Grace", score: 90, age: 22, major: "Computer Science" },
];

students.forEach((student) => {
  console.log(student.name, student.major);
});

console.log("");

const olderThan21 = students.filter((student) => {
  return student.age > 21;
});
console.log(olderThan21);

console.log("");

const nameAndAge = students.map((student) => {
  return { name: student.name, age: student.age };
});

console.log(nameAndAge);

console.log("");

const totalScore = students.reduce((acc, student) => {
  return acc + student.score;
}, 0);

console.log(totalScore);

console.log("");

students.sort((a, b) => {
  return a.score - b.score;
});

console.log(students);
