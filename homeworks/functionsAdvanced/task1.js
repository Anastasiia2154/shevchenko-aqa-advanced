const handleEven = () => console.log("Number is even");
const handleOdd = () => console.log("Number is odd");

function handleNum(number, callback1, callback2) {
  if (number % 2 === 0) {
    callback1();
  } else {
    callback2();
  }
}

handleNum(6, handleEven, handleOdd);
