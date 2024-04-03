#!/usr/bin/env node

import inquirer from "inquirer";

let Balance = 10000;
let Pin = 1234;

console.log(
  "\n---------! Welcome to Muhammad Hasnain's ATM Machine !---------\n"
);
console.log("Note: Default PIN is 1234 and initial account balance is Rs10000 \n");

let userPin = await inquirer.prompt([
  {
    name: "pin",
    type: "number",
    message: "Enter your pin code:",
  },
]);

if (userPin.pin === Pin) {
  console.log("\nLogin Successfully!");
  console.log(`\nCurrent Account Balance is Rs${Balance}\n`);
} else {
  console.log("\nInvalid PIN. Please try again.\n");
  process.exit();
}

let operation = await inquirer.prompt([
  {
    name: "operationAns",
    type: "list",
    message: "Select an operation:",
    choices: ["Withdraw Amount", "Check Balance"],
  },
]);

if (operation.operationAns === "Withdraw Amount") {
  let amount = await inquirer.prompt([
    {
      name: "userAmount",
      type: "number",
      message: "Enter Amount to Withdraw",
    },
  ]);

  console.log(`\nWithdrawal of Rs${amount.userAmount} successfully processed.`);

  Balance -= amount.userAmount;
  console.log(`\nYour Remaining Balance is: Rs${Balance}\n`);
} else if (operation.operationAns === "Check Balance") {
  console.log(`\nYour current Balance is Rs${Balance}\n`);
}
