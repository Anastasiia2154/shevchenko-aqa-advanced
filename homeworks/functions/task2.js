const isAdult = function (age) {
  return age >= 18;
};

console.log(`Person is: ${isAdult(25) ? "adult" : "not adult"}`);
console.log(`Person is: ${isAdult(15) ? "adult" : "not adult"}`);
