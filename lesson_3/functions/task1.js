const rectangleWidth = 3;
const rectangleHeight = 5;

function areaCalculation(width, height) {
  return width * height;
}

console.log(`The area of rectangle is ${areaCalculation(rectangleWidth, rectangleHeight)}`);

const area = function (width, height) {
  return width * height;
};

console.log(`The area of rectangle is ${area(rectangleWidth, rectangleHeight)}`);

const rectangleArea = (width, height) => width * height;
console.log(`The area of rectangle is ${rectangleArea(rectangleWidth, rectangleHeight)}`);
