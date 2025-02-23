const numbers = [10, 20, 30, 40, 50];

const arraySum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue,0);

console.log(`Array elements sum is ${arraySum}`);
