const users = [
  { name: "Alice", email: "alice@example.com", age: 25 },
  { name: "Bob", email: "bob@example.com", age: 30 },
  { name: "Charlie", email: "charlie@example.com", age: 28 },
  { name: "Diana", email: "diana@example.com", age: 22 },
];

for (const { name, email, age } of users) {
  console.log(`Person with name ${name} and email "${email}" is ${age} years old`);
}