# README-Generator

## Description

This app is a node.js program designed to create a professional README from various user prompts. 


## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Code Snippets](#code-snippets)
* [Technology](#technology)
* [Credits](#credits)
* [License](#license)

## Installation

The files for this program can be downloaded [here](https://github.com/pdbesse/README-Generator/archive/refs/heads/main.zip). 

This app requires node.js to be installed. For download and installation instructions, please see [nodejs.org](https://nodejs.org/en/download/).

This app also requires Inquirer to be installed. To do this, open the terminal and navigate to the extracted folder. Open terminal in the folder and enter: 
```
npm install
```
This will download any modules required for the app to work. Still in the console, enter:
```
node index.js
```
This will launch the program.

## Usage

![usage-gif](./media/README-generator-demo.gif)

Upon running the index.js file in node, the user is prompted to enter their name, email, GitHub username, project title, project description, installation instructions, usage instructions, contribution guidelines, choice of license, the year the project was made, and testing instructions.

After answering all the prompts, a README.md is generated in ./gen-README.

You may view a video of the application being used [here](https://youtu.be/lcHL6DFO1Iw).

## Code Snippets

```javascript
const inquirer = require('inquirer');
const fs = require('fs');
const utils = require('./utils/generateMarkdown');
```
This code block loads inquirer module, fs package, and the generateMarkdown function from the utils folder.

```javascript
function getInfo () {
    inquirer.prompt([
        {
            name: "name",
            message: "What is your full name?",
            type: "input",
        },
        {
            name: "license",
            message: "What license would you like to use for your project?",
            type: "rawlist",
            choices: ["Apache", "MIT", "GPLv3"]
        },
])
    .then((info) => {
        writeToFile("gen-README/README.md",  info);
    })
}
```
The function getInfo() directs inquirer to prompt the user with a series of questions. Answers are typed in or, in the case of the license, the user is given three choices to choose from. Only two prompt examples are shown here.

After the prompt answers have been collected, is then used to write the file README.md in the directory gen-README.

```javascript
function writeToFile(fileName, data) {
    fs.writeFile(fileName, utils(data), (err) => err ? console.error(err) : console.log('README Generated!'));
}
```
The function writeToFile takes a file name and data as arguments. It uses the fs package writeFile method using these arguments to write the README.md file. The data is imported from the utils folder. 

If there is an error, it logs the error in the console. If no errors are found, the message "README Generated!" is logged in the console.

```javascript
function renderLicenseBadge(data) {
  if (data.license == "MIT") {
    licenseBadge = "https://img.shields.io/badge/License-MIT-yellow.svg";
  } else if (data.license === "Apache") {
    licenseBadge = "https://img.shields.io/badge/License-Apache_2.0-blue.svg";
  } else if (data.license === "GPLv3") {
    licenseBadge = "https://img.shields.io/badge/License-GPLv3-blue.svg";
  } else {
    licenseBadge = "";
  }
}
```
The function renderLicenseBadge uses the response data as an argument. It pulls the value of data.license and, depending on the value, assigns the variable licenseBadge.

```javascript
function renderLicenseLink(data) {
  if (data.license == "MIT") {
    licenseLink = "https://opensource.org/licenses/MIT";
  } else if (data.license === "Apache") {
    licenseLink = "http://www.apache.org/licenses/LICENSE-2.0";
  } else if (data.license === "GPLv3") {
    licenseLink = "https://img.shields.io/badge/License-GPLv3-blue.svg";
  } else {
    licenseLink = "";
  }
}
```
The function renderLicenseLink uses the response data as an argument. It pulls the value of data.license and, depending on the value, assigns the variable licenseLink.

```javascript
function renderLicenseDescr(data) {
  var mitDescr = `Copyright ${data.year} ${data.name}\n \nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n \nThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n \nTHE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.;`
  var apacheDescr = `Copyright ${data.year} ${data.name}\n \nLicensed under the Apache License, Version 2.0 (the 'License'); you may not use this file except in compliance with the License. You may obtain a copy of the License at\n \nhttp://www.apache.org/licenses/LICENSE-2.0\n \nUnless required by applicable law or agreed to in writing, software distributed under the License is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.`;
  var gnuDescr = `Copyright (C) ${data.year} ${data.name}\n \nThis program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.\n \nThis program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n \nSee the GNU General Public License for more details.`;
  var empty = ""

  if (data.license == "MIT") {
    licenseDescr = mitDescr;
  } else if (data.license === "Apache") {
    licenseDescr = apacheDescr;
  } else if (data.license === "GPLv3") {
    licenseDescr = gnuDescr;
  } else {
    licenseDescr = empty;
  }
}

```
The function renderLicenseDescr uses the response data as an argument. It pulls the value of data.license and, depending on the value, assigns the variable licenseDescr. 

It also pulls the values of data.year and data.name and interpolates them into the template literal string.

```javascript
function generateMarkdown(data) {
  renderLicenseBadge(data);
  renderLicenseLink(data);
  renderLicenseDescr(data);

  return `![License: ${data.license}](${licenseBadge})
# ${data.title} 
## Description
${data.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)
* [Testing](#testing)
* [Questions](#questions)
## Installation
${data.install}
## Usage
${data.usage}
## Contributing
${data.contribution}
## License 
This app is licensed under ![License: ${data.license}](${licenseBadge}).

You can view the full license documentation [here](${licenseLink}).

${licenseDescr}
## Testing
${data.test}
## Questions?
If you have any questions about this app, please email me at ${data.email}. Visit my [GitHub page](https//www.github.com/${data.gituser}).
`;
}
```
The function generateMarkdown takes the response data as an argument. It runs renderLicenseBadge, renderLicenseLink, and renderLicenseDescr to make the variables defined within those functions accessible to the template literal string.

The function then pulls the values of various keys in the prompt response data and interpolates them into template literal string, which is the format of the README.md written by the fs package in the writeToFile function.

## Technology

Technology Used:
* [GitHub](https://github.com/)
* [GitBash](https://gitforwindows.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Javascipt](https://www.javascript.com/)
* [node.js](https://nodejs.org/en/)
* [Inquirer](https://www.npmjs.com/package/inquirer/)
* [File System - node.js](https://nodejs.org/api/fs.html)

## Credits

All coding credited to Phillip Besse.  Javascript pseudocoded with tutor Joe Young.

Websites Referenced:
* [Educative.io - Inquirer](https://www.educative.io/answers/how-to-use-the-inquirer-node-package)
* [NPMJS - Inquirer](https://www.npmjs.com/package/inquirer#questions)
* [Shields.io - License](https://shields.io/category/license)
* [lukas-h Github - License Badges](https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba)
* [Nodejs.devs - FS](https://nodejs.dev/learn/the-nodejs-fs-module)
* [Nodejs.org - FS.writeFile](https://nodejs.org/dist/latest-v16.x/docs/api/fs.html#fswritefilefile-data-options-callback)
* [MarkdownGuide.org - Markdown Cheatsheeet](https://www.markdownguide.org/cheat-sheet/)
* [Opensource.org - Licenses](https://opensource.org/licenses/alphabetical)

## License

Phillip Besse's README Generator is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).

MIT License

Copyright (c) 2022 Phillip Besse

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.