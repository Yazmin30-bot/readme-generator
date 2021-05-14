// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license != "None") {
    const val = license.split('').filter(e => e.trim().length).join('');
    return `![GitHub license](https://img.shields.io/badge/license-${val}-blue.svg)`;
  } else {
    return ``;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return "https://www.mit.edu/~amini/LICENSE.md"

    case 'APACHE 2.0':
      return "https://www.apache.org/licenses/LICENSE-2.0.txt"

    case 'GPL 3.0':
      return "https://www.gnu.org/licenses/gpl-3.0.txt"

    case 'BSD 3':
      return "https://docs.oracle.com/cloud/latest/big-data-discovery-cloud/BDDLG/cl_bsd_license.htm#BDDLG-concept_1F381CA11423445A90B7C3D6CB4DF612"

    default:
      return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license != "None") {
    
    return [`*[License](#license)`,`## License
  
  This project is licensed under the [${license}](${renderLicenseLink(license)}) license.`];
  } else {
    return [``,``];
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.project}
  ${renderLicenseBadge(data.license)}
  
  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  *[Installation](#installation)
  
  *[Usage](#usage)
  
  ${renderLicenseSection(data.license)[0]}
  
  *[Contributing](#contributing)
  
  *[Tests](#tests)
  
  *[Questions](#questions)
  
  ## Installation
  
  To install necessary dependencies, run the following command:
  
  \`\`\`
  ${data.dependencies}
  \`\`\`
  
  ## Usage
  
  ${data.using}
  
  ${renderLicenseSection(data.license)[1]}
  
  ## Contributing
  
  ${data.contributing} 
  
  ## Tests
  
  To run tests, run the following command:
  
  \`\`\`
  ${data.run}
  \`\`\`
  
  ## Questions
  
  If you have any questions about the repo, open an issue or contact me directly at ${data.email}.
  You can find more of my work at [${data.username}](https://github.com/${data.username}/).
  `;
}

module.exports = generateMarkdown;
