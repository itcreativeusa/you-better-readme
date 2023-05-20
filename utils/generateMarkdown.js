const { error } = require("console");

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
  } else if (license == "MIT") {
    return "The MIT License";
  } else if (license == "ISC") {
    return "ISC License (ISC)";
  } else if (license == "UnlicenseNU") {
    return "The Unlicense";
  } else if (license == "GNU GPL") {
    return "GNU GPL v3";
  } else {
    return license;
  }
}

// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// "The MIT License", ISC License (ISC), The Unlicense, GNU GPL v3
function renderLicenseBadge(license) {
  if (license == "ISC") {
    return (license =
      "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)");
  } else if (license == "MIT") {
    return (license =
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)");
  } else if (license == "Unlicense") {
    return (license =
      "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)");
  } else if (license == "GNU GPL") {
    return (license =
      "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)");
  } else "";
}

//Create a function that returns the license section of README
// If there is no license, return an empty string
const renderTableOfContents = `- [Installation](#installation)
- [Usage](#usage)
- [Lisence](#lisence)
- [Contribute](#contribute)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)
`;

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "ISC") {
    return (license = "https://opensource.org/licenses/ISC");
  } else if (license == "MIT") {
    return (license = "https://opensource.org/licenses/MIT");
  } else if (license == "Unlicense") {
    return (license = "http://unlicense.org/");
  } else if (license == "GNU GPL") {
    return (license = "https://www.gnu.org/licenses/gpl-3.0");
  } else "";
}

//Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);

  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
## Description
${data.description}
## Table of Content
${renderTableOfContents}
## Installation
${data.installation}
## Usage
${data.usage}
## License
${renderLicenseSection(data.license)}

${renderLicenseLink(data.license)}
## Contribute
${data.contributing}
## Tests
${data.tests}
## Questions
GitHub profile: https://github.com/${data.github}

Email: ${data.email}
`;
}

module.exports = generateMarkdown;
