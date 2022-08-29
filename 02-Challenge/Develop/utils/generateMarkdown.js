// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  <!--WRITES TILE AND DESCRIPTION-->
  # **${data.title}**
  description:
  ${data.Description}
 
  <!--TABLE OF CONTENTS-->
   ## Table of Contents
  1. [Installation](#install)
  2. [Usage](#usage)
  3. [Licensing](#licensing)
  4. [Contributing](#contribute)
  5. [Tests](#tests)
  5. [Questions](#questions)
 
  <!--WRITES INSTALLATION INSTRUCTIONS-->
   ## [Installation Instructions]((#install)
  ${data.Installation}
 
  <!--WRITES USAGE--> 
   ## [Usage](#usage)
   ${data.Usage}
 
   <!--WRITES LICENSING--> 
  TODO: ADD LICENSING OPTIONS WITH LOGOS AND DESCRIPTIONS
   ## [Licensing](#licensing)
   ${data.Licensing})
 
   <!--WRITES CONTRIBUTING-->
   ## [Contributing](#contribute)
   ${data.Contributing})
 
   <!--WRITES TESTS-->
   ## [Tests](#tests)
   Testing instructions: ${data.Tests}
 
   <!--WRITES QUESTIONS-->
   ## [Questions](#questions)
  Questions, comments, or smart remarks? Get in touch at my GitHub or Email)
  GitHub: [${data.github}](https:github.com/${data.github})
  Email: ${data.email}
        
`;
}

module.exports = generateMarkdown;
// MIT
// apache 2.0
// bsd3
// gpl 3.0
//none
