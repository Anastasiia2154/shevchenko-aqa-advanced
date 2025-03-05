function getTodo() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function getUser() {
  return fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => response.json())
    .then((user) => {
      return user;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
let allPromises;
let racePromises;

Promise.all([getTodo(), getUser()])
  .then((result) => {
    allPromises = result;
    console.log("Result all promises: ", allPromises);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

Promise.race([getTodo(), getUser()])
  .then((result) => {
    racePromises = result;
    console.log("Result race promises: ", racePromises);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
