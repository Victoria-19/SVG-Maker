const inquirer = require("inquirer");
const fs = require("fs");
const generateSvgContent = require("./shapes.js");

// Prompt user for input using Inquirer
function promptUser() {
    return inquirer.prompt([
      {
        type: "input",
        name: "text",
        message: "Enter up to three characters:",
        validate: (input) => input.length <= 3,
      },
      {
        type: "input",
        name: "textColor",
        message: "Enter the text color (keyword or hexadecimal number):",
      },
      {
        type: "list",
        name: "shapeType",
        message: "Select a shape:",
        choices: ["circle", "triangle", "square"],
      },
      {
        type: "input",
        name: "shapeColor",
        message: "Enter the shape color (keyword or hexadecimal number):",
      },
    ]);
  }

  // Need to create function to Generate logo svg file