//write a program that checks if a given number is positive negative or zero.

function checkNumberType(number: number):string {
    if(number > 0){
        return 'Positive';
    }else if (number < 0) {
        return 'Negative';
    }else{
        return "Zero";
    }
}
//Example usage:
const userInput: number = 42;
const result: string = checkNumberType(userInput);
console.log(`${userInput}is ${result}.`);
