#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.cyanBright("\n\t********* Welcome To Simple Calculator ********* \n"));
const answer = await inquirer.prompt([
    { message: chalk.greenBright("Enter first number:"), type: "number", name: "firstNumber" },
    { message: chalk.greenBright("Enter second number:"), type: "number", name: "secondNumber" },
    {
        message: chalk.yellowBright("Select one of the operators to perform operation:"),
        type: "list",
        name: "operators",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    }
]);
if (answer.operators === "Addition") {
    console.log(chalk.magentaBright(`\t${answer.firstNumber} + ${answer.secondNumber} = ${answer.firstNumber + answer.secondNumber}`));
}
else if (answer.operators === "Subtraction") {
    console.log(chalk.magentaBright(`\t${answer.firstNumber} - ${answer.secondNumber} = ${answer.firstNumber - answer.secondNumber}`));
}
else if (answer.operators === "Multiplication") {
    console.log(chalk.magentaBright(`\t${answer.firstNumber} x ${answer.secondNumber} = ${answer.firstNumber * answer.secondNumber}`));
}
else if (answer.operators === "Division") {
    console.log(chalk.magentaBright(`\t${answer.firstNumber} ÷ ${answer.secondNumber} = ${answer.firstNumber / answer.secondNumber}`));
}
else {
    console.log("Please select a valid operator");
}
