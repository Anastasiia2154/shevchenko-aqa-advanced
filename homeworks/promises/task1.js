function printText(text, timeout) {
    setTimeout(() => console.log(text), timeout);
}

printText("Hi!", 5000);