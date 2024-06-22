#!/usr/bin/env node

import inquirer from "inquirer";

//****************************************************
// creating heading for display of program at runtime
//****************************************************
console.log("=".repeat(35));
console.log("Welcome to my calculator!")
console.log("=".repeat(35));

//*************************************************
//asking questions from users through inquirer
//*************************************************

let answers = await inquirer.prompt([
    {
    message: "Please Enter Your First Number.",
    type: "number",
    name: "firstnumber",
    },

    {
    message: "Please Enter Your Second Number.",
    type: "number",
    name: "secondnumber",
    },

    {
    message: "Please Select Your first Operator to perform the Calculations.",
    type: "list",
    name: "Operator",
    choices: ["Addition","Subtraction","Multiplication","Division"],
    },
]);

// console.log(answers.message);

//*******************************************************************************
// using conditional statements if else and elseif to create operation of program
//*******************************************************************************

if(answers.Operator === "Addition"){
console.log(answers.firstnumber + answers.secondnumber)
}
else if (answers.Operator === "Subtraction"){
    console.log(answers.firstnumber - answers.secondnumber)
}
else if(answers.Operator === "Multiplication"){
    console.log(answers.firstnumber * answers.secondnumber)
}
else if (answers.Operator === "Division"){
    console.log(answers.firstnumber / answers.secondnumber)
}
else{
    console.log("Invalid Input")
}
 