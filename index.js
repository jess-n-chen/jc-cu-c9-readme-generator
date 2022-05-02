// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// An array of questions for end user to input
const questions = [
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub Username (Required)",
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        console.log("Please enter your GitHub username!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address (Required)",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please enter your email address!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "title",
    message: "What is the name of your project? (Required)",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please enter your project title!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Provide a description of the project (Required)",
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log("You need to enter a project description!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project? (Required)",
    validate: (installationInput) => {
      if (installationInput) {
        return true;
      } else {
        console.log("You need to provide installation instructions!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "usage",
    message: "Provide instructions and examples for use. (Required)",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log("You need to provide installation instructions!");
        return false;
      }
    },
  },
  {
    type: "list",
    name: "license",
    message: "Choose the appropriate license for your project:",
    choices: [
      "N/A",
      "Apache",
      "BSD 2",
      "BSD 3",
      "Boost",
      "Creative Commons",
      "Eclipse",
      "GNU AGPL v3.0",
      "GNU GPL v3.0",
      "GNU GPL v2.0",
      "GNU LGPL v2.1",
      "MIT",
      "Mozilla",
      "The Unlicense",
    ],
  },
  {
    type: "input",
    name: "contributors",
    message:
      "List your collaborators (if any) or any 3rd Party Asset used that require attribution (Optional)",
  },
  {
    type: "input",
    name: "test",
    message: "Provide test instructions for your project (Optional)",
  },
];

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;

    console.log(
      "Your README file has been generated! Check out the dist folder to see the output!"
    );
  });
}

// Function to initialize app
function init() {
  inquirer.prompt(questions).then((markdownData) => {
    const mdFile = generateMarkdown(markdownData);
    const fileName = "./dist/README.md";

    writeToFile(fileName, mdFile);
  });
}

// Function call to initialize app
init();
