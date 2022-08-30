// packages required for usage
const fs = require('fs')
const inquirer = require('inquirer');
const markdown = require('./utils/generateMarkdown')
const path = require('path');
//const { title } = require('process');
//const { stringify } = require('querystring');
const LicensingArray = 
    [
     'GPL_3.0',//0
     'MIT',//1
     'Apache_2.0',//2
     'BSD_3',//3
     'none',//4
    ]


console.log(LicensingArray)
//This is an Array of Questions for User input
const questions = [
   'Title of project.',//0
   'Description of project.', //1
   'Add Table of Contents.',//2
   'Installation Instructions.',//3
   'Information about usage.', //4
   'Licensing.', //5 nullified
   'How can users contribute to your project?', //6
   'Please add testing instructions.', //7
   'Add your GitHub user name (so users can find you on github).',//8
   'Add your email (so users can contact).',//9

];
inquirer
.prompt([
  {
    
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
    
    type: 'checkbox',
    message: `Choose  a licensing option (only one)`,
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
    

  },
  { //email
    type: 'input',
    message: `${questions[9]}`,
    name: 'email',
    
  },
])
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests.
 .then((data) => {
    fs.writeFileSync(path.join(process.cwd(), `${data.title}.md`),markdown(data))
})
    


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
