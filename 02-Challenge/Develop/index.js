// packages required for usage
const { create } = require('domain');
const fs = require('fs')
const inquirer = require('inquirer');
//const { stringify } = require('querystring');
const LicensingArray = [
    'General Public License (GPL)',//0
    'Drivers License',//1
    'Food and Safety License',//2


]

//This is an Array of Questions for User input
const questions = [
   'Title of project...',//0
   'Description of project...', //1
   'Add Table of Contents...',//2
   'Installation Instructions...',//3
   'Usage...', //4
   'Licensing..', //5
   'Contributing...', //6
   ' Testing instructions...', //7
   'github user name (so users can find you on github)...',//8
   'email (so users can contact)...',//9

];
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
inquirer
.prompt([
  {
    // WHEN I enter my project title
    // THEN this is displayed as the title of the README
    //this will be the tile of the readme
    type: 'input',
    message: `${questions[0]}`,
    name: 'title',
  },
  {
    //discription of the readme
    type: 'input',
    message: `${questions[1]}`,
    name: 'Description',
  },
  {
    //Instilation instructions
    type: 'input',
    message: `${questions[3]}`,
    name: 'Installation',
  },
  
  {
    //terms of usage
    type: 'input',
    message: `${questions[4]}`,
    name: 'Usage',
  },
  {
    //TODO!!!
    //licensing badges to pick from
    // WHEN I choose a license for my application from a list of options
    // THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
    type: 'checkbox',
    message: `choose a licensing option`,
    name: 'Licensing',
    choices: LicensingArray,
  },
  { 
    //asks maker how to contribute to project
    type: 'input',
    message: `${questions[6]}`,
    name: 'Contributing',
  },
  { 
   //asks maker how to test project
    type: 'input',
    message: `${questions[7]}`,
    name: 'Tests',
  },
  { //github user name
    type: 'input',
    message: `${questions[8]}`,
    name: 'github',
    // WHEN I enter my GitHub username
    // THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

  },
  { //email
    type: 'input',
    message: `${questions[9]}`,
    name: 'email',
    // WHEN I enter my email address
    // THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
  },
])
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests.
 .then((data) => {
    
  // TODO: Create a function to write README file
const CreateFiles = fs.createWriteStream(`${data.title}.md`, {
      //flags: 'a' //flags: 'a' preserved old data
      
      }, (err) => {
        err ? console.log('An error has occured.') :
         console.log(`${data.title}.md was created successfuly.`);
      })
      let writeLine = (line) => CreateFiles.write(`\n${line}`);

//WRITES TILE AND DESCRIPTION
writeLine(`# **${data.title}**`)
writeLine(`description: <br>`)
writeLine(`${data.Description} <br>`)

//TABLE OF CONTENTS
writeLine(` ## Table of Contents <br>`)
writeLine(`1. [Installation](#install) <br>`)
writeLine(`2. [Usage](#usage) <br>`)
writeLine(`3. [Licensing](#licensing) <br>`)
writeLine(`4. [Contributing](#contribute) <br>`)
writeLine(`5. [Tests](#tests) <br>`)
writeLine(`5. [Questions](#questions) <br>`)

//WRITES INSTALLATION INSTRUCTIONS
writeLine(` ## [Installation Instructions]((#install) <br>`)
writeLine(`${data.Installation} <br>`)

// WRITES USAGE 
writeLine(` ## [Usage](#usage) <br>`)
writeLine(` ${data.Usage} <br>`)

//WRITES LICENSING 
//TODO: ADD LICENSING OPTIONS WITH LOGOS AND DESCRIPTIONS
writeLine(` ## [Licensing](#licensing) <br>`)
writeLine(` ${data.Licensing} <br>`)

//WRITES CONTRIBUTING
writeLine(` ## [Contributing](#contribute) <br>`)
writeLine(` ${data.Contributing} <br>`)

//WRITES TESTS
writeLine(` ## [Tests](#tests) <br>`)
writeLine(` Testing instructions: <br> ${data.Contributing} <br>`)

//WRITES QUESTIONS
writeLine(` ## [Questions](#questions) <br>`)
writeLine(`Questions, comments, or smart remarks? <br>`)
writeLine(`GitHub: [${data.github}](https://github.com/${data.github}) <br>`)
writeLine(`Email: ${data.email} <br>`)

})
    


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

// GIVEN a command-line application that accepts user input

// TODO WHEN I choose a license for my application from a list of options
// TODO THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

// TODO WHEN I click on the links in the Table of Contents
// TODO THEN I am taken to the corresponding section of the README
