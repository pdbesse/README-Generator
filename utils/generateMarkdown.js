// function to render license badge
function renderLicenseBadge(data) {
  // using data from prompt responses, pull the value of "license"
  // if "license" value == MIT
  if (data.license == "MIT") {
    // licenseBadge = MIT badge link
    licenseBadge = "https://img.shields.io/badge/License-MIT-yellow.svg";
    // else if "license" value == Apache
  } else if (data.license === "Apache") {
    // licenseBadge = Apache badge link
    licenseBadge = "https://img.shields.io/badge/License-Apache_2.0-blue.svg";
    // else if "license" value == GPLv3
  } else if (data.license === "GPLv3") {
    // licenseBadge = GPL badge link
    licenseBadge = "https://img.shields.io/badge/License-GPLv3-blue.svg";
    // if no choice is given
  } else {
    licenseBadge = "";
  }
}

// funciton to render license link
function renderLicenseLink(data) {
  // using data from prompt responses, pull the value of "license"
  // if "license" value == MIT
  if (data.license == "MIT") {
    // licenseLink = MIT URL
    licenseLink = "https://opensource.org/licenses/MIT";
    // else if "license" value == Apache
  } else if (data.license === "Apache") {
    // licenseLink = Apache URL
    licenseLink = "http://www.apache.org/licenses/LICENSE-2.0";
    // else if "license" value == GPLv3
  } else if (data.license === "GPLv3") {
    // licenseBLink = GPL URL
    licenseLink = "https://img.shields.io/badge/License-GPLv3-blue.svg";
    // if no choice is given
  } else {
    licenseLink = "";
  }
}

// function to render license description
function renderLicenseDescr(data) {
  // for the following three variables, pull "year" and "name" values from prompt responses and instert them with template literals
  var mitDescr = `Copyright ${data.year} ${data.name}\n \nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n \nThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n \nTHE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.;`
  var apacheDescr = `Copyright ${data.year} ${data.name}\n \nLicensed under the Apache License, Version 2.0 (the 'License'); you may not use this file except in compliance with the License. You may obtain a copy of the License at\n \nhttp://www.apache.org/licenses/LICENSE-2.0\n \nUnless required by applicable law or agreed to in writing, software distributed under the License is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.`;
  var gnuDescr = `Copyright (C) ${data.year} ${data.name}\n \nThis program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.\n \nThis program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n \nSee the GNU General Public License for more details.`;
  var empty = ""

  // if "license" value == MIT
  if (data.license == "MIT") {
    licenseDescr = mitDescr;
    // else if "license" value == Apache
  } else if (data.license === "Apache") {
    licenseDescr = apacheDescr;
  // else if "license" value == GPLv3
  } else if (data.license === "GPLv3") {
    licenseDescr = gnuDescr;
    // if no choice is given
  } else {
    licenseDescr = empty;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // run the following three functions 
  renderLicenseBadge(data);
  renderLicenseLink(data);
  renderLicenseDescr(data);
  // README.md template
  // pulls prmompt values from returned prompt data, as well as variable values from
  // renderLicenseBadge(), renderLicenseLink(), and renderLicenseDescr()
  // and inserts the values into the README.md
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

// exports generateMarkdown() so that it can be imported outside this file
module.exports = generateMarkdown;
