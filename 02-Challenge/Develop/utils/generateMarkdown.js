
function generateMarkdown(data) {
  // makes a readme with no mention of licensing if "none" was selected.
  if (data.Licensing == "none") {
    return `
  <!--TILE AND DESCRIPTION-->
  # **${data.title}** 
  
  Description: <br>
  ${data.Description}
 
  <!--TABLE OF CONTENTS-->
   ## Table of Contents
  1. [Installation](#install)
  2. [Usage](#usage)
  3. [Contributing](#contribute)
  4. [Tests](#tests)
  5. [Questions](#questions)
 
  <!--INSTALLATION INSTRUCTIONS-->
   ### [Installation Instructions](install)
  ${data.Installation}
 
  <!--USAGE--> 
   ### [Usage](usage)
   ${data.Usage}
 
   
   <!--CONTRIBUTING-->
   ### [Contributing](contribute)
   ${data.Contributing}
 
   <!--TESTS-->
   ### [Tests](tests)
   Testing instructions: ${data.Tests}
 
   <!--QUESTIONS-->
   ### [Questions](questions)
  Questions, comments, or smart remarks? Get in touch at my GitHub or Email. <br>
  GitHub: [${data.github}](https:github.com/${data.github}) <br>
  Email: ${data.email}
       
  ###### This Readme was made by readme.genorator built by Peyton Castillo [Visit Repo](https://github.com/PeytonCast/readme.genorator)
`
  } // makes a readme with licensing if something other than "none" was selected.
  else {
  return `
  <!--TILE AND DESCRIPTION-->
  # **${data.title}** 
  ![GitHub license](https://img.shields.io/badge/licensed_under-${data.Licensing}-blue.svg) <br>
  Description: <br>
  ${data.Description}
 
  <!--TABLE OF CONTENTS-->
   ## Table of Contents
  1. [Installation](#install)
  2. [Usage](#usage)
  3. [Licensing](#licensing)
  4. [Contributing](#contribute)
  5. [Tests](#tests)
  5. [Questions](#questions)
 
  <!--INSTALLATION INSTRUCTIONS-->
   ### [Installation Instructions](install)
  ${data.Installation}
 
  <!--USAGE--> 
   ### [Usage](usage)
   ${data.Usage}
 
   <!--LICENSING--> 
  
   ### [Licensing](licensing)
   Notice: This application is covered under ${data.Licensing} licensing. <br>
   For more information we recomend [Inforation on ${data.Licensing}](https://www.google.com/search?q=${data.Licensing}+licensing+information)
 
   <!--CONTRIBUTING-->
   ### [Contributing](contribute)
   ${data.Contributing}
 
   <!--TESTS-->
   ### [Testing Instructions](tests)
  ${data.Tests}
 
   <!--QUESTIONS-->
   ### [Questions](questions)
  Questions, comments, or smart remarks? Get in touch at my GitHub or Email. <br>
  GitHub: [${data.github}](https:github.com/${data.github}) <br>
  Email: ${data.email}
        
  ###### This Readme was made by readme.genorator built by Peyton Castillo [Visit Repo](https://github.com/PeytonCast/readme.genorator)`;}
}

module.exports = generateMarkdown;


