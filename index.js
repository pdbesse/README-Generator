const inquirer = require('inquirer');
const fs = require('fs');

function getInfo () {
    inquirer.prompt([
        {
            name: "email",
            message: "What is your email address?",
            type: "input",
        },
        {
            name: "gituser",
            message: "What is your GitHub username?",
            type: "input",
        },
        {
            name: "title",
            message: "What is the title of your project?",
            type: "input",
        },
        {
            name: "description",
            message: "How would you describe your project?",
            type: "input",
        },
        {
            name: "install",
            message: "What are the installation instructions for your project, if any?",
            type: "input",
        },
        {
            name: "usage",
            message: "How does one use your project?",
            type: "input",
        },
        {
            name: "contribution",
            message: "How can I contribute to your project?",
            type: "input",
        },
        {
            name: "license",
            message: "What license would you like to use for your project?",
            type: "rawlist",
            choices: ["Apache", "MIT", "GNU"]
        },
        {
            name: "test",
            message: "How can your project be tested?",
            type: "input",
        },
        {
            name: "questions",
            message: "How can one ask questions about your project?",
            type: "input",
        },
])
    .then((response) => {
        console.log(response);
    })
}

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// Function call to initialize app
getInfo();
