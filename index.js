// Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
// fs is a Node standard library package for reading and writing files
const fs = require("fs");
// Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Title",
  },
  {
    type: "input",
    name: "description",
    message: "Description",
  },
  /*{
    type: "input",
    name: "tableOfContents",
    message: "Table of Content",
  },*/

  {
    type: "input",
    name: "installation",
    message: "Instalation",
  },
  {
    type: "input",
    name: "usage",
    message: "Usage",
  },
  {
    type: "checkbox",
    name: "license",
    message: "Choose license from the list",
    choices: ["ISC", "MIT", "Unlicense", "GNU GPL"],
  },
  {
    type: "input",
    name: "contributing",
    message: "Contributing",
  },
  {
    type: "input",
    name: "tests",
    message: "Tests",
  },
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub Username",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your Email",
  },
];

// Create a function to write README file
// Ternary operator takes in a condition followed by a question mark (?)
// then an expression to execute if the condition is truthy followed by a colon (:)
// and finally the expression to execute if the condition is falsy.
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Readme.md successfully generated!")
  );
}

//Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (data) {
    const markdownText = generateMarkdown(data);
    writeToFile("README.md", markdownText);
  });
}

// Function call to initialize app
init();
