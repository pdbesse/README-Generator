// use inquirer module
const inquirer = require('inquirer');
// use file system module
const fs = require('fs');
// use generateMarkdown() from ./utils
const utils = require('./utils/generateMarkdown');

// function to prompt user for information
function getInfo () {
    // inquirer prompts the user with the following options:
    inquirer.prompt([
        {
            name: "name",
            message: "What is your full name?",
            type: "input",
        },
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
            name: "test",
            message: "How can your project be tested?",
            type: "input",
        },
])
    // once the information has been collected, write the info to the file "gen-README/README.md"
    .then((info) => {
        writeToFile("gen-README/README.md",  info);
    })
}

// function to write README.md
function writeToFile(fileName, data) {
    // writes the README.md using generateMarkdown() located in ./utils
    // if there is an error, display the error on the console
    // if no error, log "README Generated!" in the console
    fs.writeFile(fileName, utils(data), (err) => err ? console.error(err) : console.log('README Generated!'));
}

// function to initialize app
getInfo();
