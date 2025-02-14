const number = 3;

// with for loop

for (let i = 1; i <= 10; i++) {
  let result = number * i;
  console.log(`${number} * ${i} = ${result}`);
}

console.log("\n------------------------------\n");

//with while loop

let j = 1;

while (j <= 10) {
  console.log(`${number} * ${j} = ${number * j}`);
  j++;
}