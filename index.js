"use strict";
//write a program that checks if a given number is positive negative or zero.
function checkNumberType(number) {
    if (number > 0) {
        return 'Positive';
    }
    else if (number < 0) {
        return 'Negative';
    }
    else {
        return "Zero";
    }
}
//Example usage:
const userInput = 42;
const result = checkNumberType(userInput);
console.log(`${userInput}is ${result}.`);
