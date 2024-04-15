#! /usr/bin/env node 
import inquirer from "inquirer" 
import chalk from "chalk"

let myBalance = 40000;

const mypin = 2244; 

//verify pin 

const pinAnswer = await inquirer.prompt(
        {
            name: "pin",
            message: "enter your PIN code!:",
            type: "number",
  }
);
if (pinAnswer.pin === mypin) {
    console.log (chalk.blue("correct pin code!!"));
    console.log(chalk.green("WELCOME! To our ATM service!"));
 
 const userChoice = await inquirer.prompt(
        [
           {
               name: "operation",
               message: "please select an option:",
               type: "list",
               choices: ["withdraw" , "check Balance" , "fast cash"],
 },
 ]);
 if (userChoice.operation === "withdraw") {

     const amountAnswer = await inquirer.prompt(
         [
            {
                name: "amount",
                message: "Enter your withdraw amount!",
                type: "number",
      },
      ]);

      if (amountAnswer.amount <= myBalance) {
          myBalance -= amountAnswer.amount;
          console.log(chalk.yellow(`Transaction successfull!. your remaining balance is $${myBalance}`));
      } else {
          console.log(chalk.red("Insufficient balance."));
      }
 } else if (userChoice.operation === "check Balance") {
     console.log(chalk.bgGray(`Your balance is: $${myBalance}`));
 } else if (userChoice.operation === "fast cash") {
     const fastCashAns = await inquirer.prompt(
         [
            {
                name: "fastCash",
                message: "select the amount you have like to withdraw:",
                type: "list",
                choices: ['10000','20000', '30000', '40000'],
     },
     ]);

     if (fastCashAns.fastCash <= myBalance) {
         myBalance -= fastCashAns.fastCash;
         console.log(chalk.green(`Transaction successfull. Your remaining balance is: $${myBalance}`));
         console.log(chalk.bgGreenBright("THANK YOU!"));
     } else {
         console.log(chalk.red("Insufficient Balance."));
     }
   }
 }

else {
    console.log(chalk.red("incorrect pin code please enter correct pin!"));
};