function divide(numerator, denominator) {
  if (typeof numerator !== "number" || typeof denominator !== "number") {
    throw new Error("Argument type must be number!");
  } else if (denominator === 0) {
    throw new Error("Denominator can not be 0!");
  }
  return numerator / denominator;
}

try {
  console.log(`Result: ${divide(88, 0)}`);
} catch (error) {
  console.error(`Error: ${error.message}`);
} finally {
  console.log("End of the program");
}
console.log("--------------------");

try {
  console.log(`Result: ${divide("90", 4)}`);
} catch (error) {
  console.error(`Error: ${error.message}`);
} finally {
  console.log("End of the program");
}
console.log("--------------------");

try {
  console.log(`Result: ${divide(18, "9")}`);
} catch (error) {
  console.error(`Error: ${error.message}`);
} finally {
  console.log("End of the program");
}
console.log("--------------------");

try {
  console.log(`Result: ${divide(7, 2)}`);
} catch (error) {
  console.error(`Error: ${error.message}`);
} finally {
  console.log("End of the program");
}
console.log("--------------------");
