const inquirer = require('inquirer');
const fs = require('fs');
const utils = require('./utils/generateMarkdown');

// function to prompt user for information
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
            choices: ["Apache", "MIT", "GPLv3"]
        },
        {
            name: "year",
            message: "In what year was your project made?",
            type: "input",
        },
        {
            name: "name",
            message: "What is your full name?",
            type: "input",
        },
        {
            name: "test",
            message: "How can your project be tested?",
            type: "input",
        },
])
    .then((info) => {
        //console.log(info);
        writeToFile("gen-README/README.md",  info);
    })
}

// function to write README.md
function writeToFile(fileName, data) {
    fs.writeFile(fileName, utils(data), (err) => err ? console.error(err) : console.log('Generating README.md...'));
}

// function call to initialize app
getInfo();
