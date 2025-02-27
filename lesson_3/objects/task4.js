const person = {
  firstName: "Daenerys",
  lastName: "Targaryen",
  age: 20,
};

person.email = "test@gmail.com";
delete person.age;

console.log(person);