const car1 = {
  brand: "Lamborghini",
  model: "Urus",
  year: 2017,
};

const car2 = {
  brand: "Alfa Romeo",
  model: "Stelvio",
  owner: "John",
};

const car3 = { ...car1, ...car2 };
console.log(car3);
