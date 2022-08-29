// packages required for usage
const { create } = require('domain');
const fs = require('fs')
const inquirer = require('inquirer');
const markdown = require('./utils/generateMarkdown')
const path = require('path')
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
    fs.writeFileSync(path.join(process.cwd(), 'readme.md'),markdown(data))
//   // TODO: Create a function to write README file
// const CreateFiles = fs.createWriteStream(`${data.title}.md`, {
//       //flags: 'a' //flags: 'a' preserved old data
      
//       }, (err) => {
//         err ? console.log('An error has occured.') :
//          console.log(`${data.title}.md was created successfuly.`);
//       })
//       let writeLine = (line) => CreateFiles.write(`\n${line}`);

// //WRITES TILE AND DESCRIPTION
// `# **${data.title}**`)
// `description:`)
// `${data.Description}`)

// //TABLE OF CONTENTS
// ` ## Table of Contents`)
// `1. [Installation](#install)`)
// `2. [Usage](#usage)`)
// `3. [Licensing](#licensing)`)
// `4. [Contributing](#contribute)`)
// `5. [Tests](#tests)`)
// `5. [Questions](#questions)`)

// //WRITES INSTALLATION INSTRUCTIONS
// ` ## [Installation Instructions]((#install)`)
// `${data.Installation}`)

// // WRITES USAGE 
// ` ## [Usage](#usage)`)
// ` ${data.Usage}`)

// //WRITES LICENSING 
// //TODO: ADD LICENSING OPTIONS WITH LOGOS AND DESCRIPTIONS
// ` ## [Licensing](#licensing)`)
// ` ${data.Licensing}`)

// //WRITES CONTRIBUTING
// ` ## [Contributing](#contribute)`)
// ` ${data.Contributing}`)

// //WRITES TESTS
// ` ## [Tests](#tests)`)
// ` Testing instructions: ${data.Tests}`)

// //WRITES QUESTIONS
// ` ## [Questions](#questions)`)
// `Questions, comments, or smart remarks? Get in touch at my GitHub or Email`)
// `GitHub: [${data.github}](https://github.com/${data.github})`)
// `Email: ${data.email}`)

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
