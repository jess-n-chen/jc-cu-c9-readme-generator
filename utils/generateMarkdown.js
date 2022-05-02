// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var badge = "";
  // Use Switch Case to Generate Badge SVG
  switch (license) {
    case "Apache":
      badge = "License-Apache_2.0-blue.svg";
      break;
    case "BSD 2":
      badge = "License-BSD_2--Clause-orange.svg";
      break;
    case "BSD 3":
      badge = "License-BSD_3--Clause-blue.svg";
      break;
    case "Boost":
      badge = "License-Boost_1.0-lightblue.svg";
      break;
    case "Creative Commons":
      badge = "License-CC0_1.0-lightgrey.svg";
      break;
    case "Eclipse":
      badge = "License-EPL_1.0-red.svg";
      break;
    case "GNU AGPL v3.0":
      badge = "License-AGPL_v3-blue.svg";
      break;
    case "GNU GPL v3.0":
      badge = "License-GPLv3-blue.svg";
      break;
    case "GNU GPL v2.0":
      badge = "License-GPL_v2-blue.svg";
      break;
    case "GNU LGPL v2.1":
      badge = "License-LGPL_v3-blue.svg";
      break;
    case "MIT":
      badge = "License-MIT-yellow.svg";
      break;
    case "Mozilla":
      badge = "License-MPL_2.0-brightgreen.svg";
      break;
    case "The Unlicense":
      badge = "license-Unlicense-blue.svg";
      break;
    default:
      break;
  }

  // Return Badge Image, if available
  if (!badge) {
    return "";
  } else {
    return `[![License](https://img.shields.io/badge/${badge})]`;
  }
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // Use Switch Case to Return License Link
  switch (license) {
    case "Apache":
      return "(https://opensource.org/licenses/Apache-2.0)";
    case "BSD 2":
      return "(https://opensource.org/licenses/BSD-2-Clause)";
    case "BSD 3":
      return "(https://opensource.org/licenses/BSD-3-Clause)";
    case "Boost":
      return "(https://www.boost.org/LICENSE_1_0.txt)";
    case "Creative Commons":
      return "(http://creativecommons.org/publicdomain/zero/1.0/)";
    case "Eclipse":
      return "(https://opensource.org/licenses/EPL-1.0)";
    case "GNU AGPL v3.0":
      return "(https://www.gnu.org/licenses/agpl-3.0)";
    case "GNU GPL v3.0":
      return "(https://www.gnu.org/licenses/gpl-3.0)";
    case "GNU GPL v2.0":
      return "(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
    case "GNU LGPL v2.1":
      return "(https://www.gnu.org/licenses/lgpl-3.0)";
    case "MIT":
      return "(https://opensource.org/licenses/MIT)";
    case "Mozilla":
      return "(https://opensource.org/licenses/MPL-2.0)";
    case "The Unlicense":
      return "(http://unlicense.org/)";
    default:
      return "";
  }
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
  } else if (license === "N/A") {
    return "";
  } else {
    return `Licensed under the ${license} license.`;
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#Usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contributors}

  ## Tests
  ${data.test}

  ## Questions
  Email me with any questions: ${data.email}
  Github Profile: [${data.github}](https://github.com/${data.github})
`;
}

module.exports = generateMarkdown;
