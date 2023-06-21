const inquirer = require("inquirer");
const fs = require("fs");
const generateSvgContent = require("./lib/shapes");

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

  // Generate the logo SVG file
function generateLogo() {
    promptUser()
      .then((answers) => {
        const { text, textColor, shapeType, shapeColor } = answers;
  
        const svgContent = generateSvgContent(text, textColor, shapeType, shapeColor);
  
        if (svgContent) {
          fs.writeFile("logo.svg", svgContent, (err) => {
            if (err) {
              console.log("An error occurred while writing the SVG file.");
              console.error(err);
            } else {
              console.log("Generated logo.svg");
            }
          });
        }
      })
      .catch((err) => {
        console.log("An error occurred while generating the logo.");
        console.error(err);
      });
  }
  
  // Run the logo generation
  generateLogo();