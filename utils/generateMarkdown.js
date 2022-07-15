// var licenseBadge = "";
// var licenseLink = "";
// // var licenseSection = "";

// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   if (data.license == "MIT") {
//     licenseBadge = "https://img.shields.io/badge/License-MIT-yellow.svg";
//   } else if (data.license === "Apache") {
//     licenseBadge = "https://img.shields.io/badge/License-Apache_2.0-blue.svg";
//   } else {
//     licenseBadge = "https://img.shields.io/badge/License-GPLv3-blue.svg";
//   }
// }

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {
//   if (data.license == "MIT") {
//     licenseLink = "https://opensource.org/licenses/MIT";
//   } else if (data.license === "Apache") {
//     licenseLink = "https://opensource.org/licenses/Apache-2.0";
//   } else {
//     licenseLink = "https://www.gnu.org/licenses/gpl-3.0";
//   }
// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {

// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description
${data.description}
## Usage
${data.usage}
## Installation
${data.install}
## Contributions
${data.contribution}
## License 
${data.license}
## 
${data.test}
## 
${data.questions}
## Contact 
${data.gituser}
${data.email}
`;
}

// ![](${licenseBadge})

module.exports = generateMarkdown;
