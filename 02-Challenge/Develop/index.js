// packages required for usage
const { create } = require('domain');
const fs = require('fs')
const inquirer = require('inquirer');
//const { stringify } = require('querystring');

//This is an Array of Questions for User input
const questions = [
   'Title of project...',//0
   'Description of project...', //1
   'Add Table of Contents...',//2
   'Installation Instructions...',//3
   'Usage...', //4
   'Licensing..', //5
   'Contributing...', //6
   'Tests...', //7
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
    // WHEN I click on the links in the Table of Contents
    // THEN I am taken to the corresponding section of the README
    // TODO change this to the value of [3 4 5 6 7]
    type: 'input',
    message: `${questions[2]}`,
    name: 'Table_of_Contents',
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
    //licensing badges to pick from
    // WHEN I choose a license for my application from a list of options
    // THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
    type: 'input',//change to check
    message: `${questions[5]}`,
    name: 'Licensing',
    // add a list of licensing badge
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
      })
      let writeLine = (line) => CreateFiles.write(`\n${line}`);
writeLine(`# ${data.title}`)
writeLine(`description: <br>`)
writeLine(`${data.Description}`)

})
    //  (err) => {
    //    err ? console.log('An error has occured.') :
    //     console.log(`${data.title}.md was created successfuly.`);
    //  }
 
//     CreateFiles.write(`# ${data.title} `), 
// CreateFiles.write(`<!--break line here--> description:`),
// CreateFiles.write(`<br> ${data.Description}`)


//`# ${data.title}`,
//`<br> description: <br> ${data.Description} <br> ## Table of Contents <br>  <br> 1. [Installation](${data.Installation}) <br> <br> 2. [Usage](${data.Usage}) <br> <br> 3. [Licensing](${data.Licensing}) <br> 4. [Contributing](${data.Contributing}) <br>`, null, "   "
// const CreateFiles = fs.createWriteStream('./file.txt', {
//     flags: 'a' //flags: 'a' preserved old data
// })

// for(let i = 0; i < 5; i++){
//   CreateFiles.write(i.toString()+'\r\n') //'\r\n at the end of each value
// }
// function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

// GIVEN a command-line application that accepts user input

// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

// WHEN I enter my project title
// THEN this is displayed as the title of the README

// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README