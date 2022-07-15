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

function renderLicenseDescr(data) {
  if (data.license == "MIT") {
    licenseDescr = mitDescr;
  } else if (data.license === "Apache") {
    licenseDescr = apacheDescr;
  } else {
    licenseDescr = gnuDescr;
  }
}

// TODO: Create a function to generate markdown for README
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
This app is licensed under ![License: ${data.license}](${licenseBadge}.
You can view license documentation ![here](${licenseLink}).
${licenseDescr}
## Testing
${data.test}
## Questions?
If you have any questions about this app, please email me at ${data.email}. Visit my [GitHub page](https//www.github.com/${data.gituser}).
`;
}

// var mitDescr = "";
// var apacheDescr = `Copyright ${data.year} ${data.name} Licensed under the Apache License, Version 2.0 (the 'License'); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.`;
// var gnuDescr = "";


module.exports = generateMarkdown;
