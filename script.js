// Beginners JavaScript Series 2021 (Muhammad Ahsan Ayaz) - https://www.youtube.com/playlist?list=PL2sQdFoGnLIjERHiLVzcheUODYLPMiUx3
console.clear();

let number1 = prompt('Enter First Number');
number1 = parseInt(number1);

let number2 = prompt('Enter Second Number');
number2 = parseInt(number2);

// + add, - subtract, * multiply ,  / divide

const sum = (firstNumber, secondNumber) => {
    const result = firstNumber + secondNumber;
    return result;
};


const subtract = (firstNumber, secondNumber) => {
    const result = firstNumber - secondNumber;
    return result;
};


const multiply = (firstNumber, secondNumber) => {
    const result = firstNumber * secondNumber;
    return result;
};


const divide = (firstNumber, secondNumber) => {
    const result = firstNumber / secondNumber;
    return result;
};

const operator = '-';

if (operator == '-') {
    const output = subtract(number1, number2);
    document.write(output)
} else if (operator == '+') {
    const output = subtract(number1, number2);
    document.write(output)
}

else {
    alert('Not subtract!!!')
}



