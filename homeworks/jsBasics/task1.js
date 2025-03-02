let stringValue = "Test string",
  numberValue = 5,
  booleanValue = true,
  nullValue = null,
  undefinedValue = undefined;

function printValue(valueForPrint) {
  console.log(valueForPrint);
}

printValue(`String value - ${stringValue}`);
printValue(`Number value - ${numberValue}`);
printValue(`Boolean value - ${booleanValue}`);
printValue(`Null value - ${nullValue}`);
printValue(`Undefined value - ${undefinedValue}`);