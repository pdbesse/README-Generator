var licenseBadge = "";
var licenseLink = "";
// var licenseSection = "";

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if (data.license == "MIT") {
    licenseBadge = "https://img.shields.io/badge/License-MIT-yellow.svg";
  } else if (data.license === "Apache") {
    licenseBadge = "https://img.shields.io/badge/License-Apache_2.0-blue.svg";
  } else {
    licenseBadge = "https://img.shields.io/badge/License-GPLv3-blue.svg";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if (data.license == "MIT") {
    licenseLink = "https://opensource.org/licenses/MIT";
  } else if (data.license === "Apache") {
    licenseLink = "https://opensource.org/licenses/Apache-2.0";
  } else {
    licenseLink = "https://www.gnu.org/licenses/gpl-3.0";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  renderLicenseBadge(data);
  renderLicenseLink(data);
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
This app is licensed under the ${data.license} license. You can view license information [here](${licenseLink}).
## Testing
${data.test}
## Questions?
If you have any questions about this app, please email me at ${data.email}. Visit my [GitHub page](https//www.github.com/${data.gituser}).
`;
}

module.exports = generateMarkdown;
