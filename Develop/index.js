// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { title } = require('process');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [];

inquirer.prompt(
    [
        {
            type: 'input',
            message="What is the title of your project?",
            name: 'title',
            validate: (value) => { if (value) { return true } else { return 'You need a value to continue' } }
            
        },
        {
             type: 'input',
            message="Description",
            name: 'description',
            validate: (value) => { if (value) { return true } else { return 'You need a value to continue' } }

        },
          {
             type: 'input',
            message:"Installation",
            name: 'installation',
            validate: (value) => { if (value) { return true } else { return 'You need a value to continue' } }

        },
          {
             type: 'input',
            message:"Instructions:",
            name: 'instructions',
            validate: (value) => { if (value) { return true } else { return 'You need a value to continue' } }
        },
           {
             type: 'input',
            message:"Usage",
            name: 'usage',
            validate: (value) => { if (value) { return true } else { return 'You need a value to continue' } }

        },
            {
             type: 'input',
            message:"Credits",
            name: 'credits',
            validate: (value) => { if (value) { return true } else { return 'You need a value to continue' } }

        },
         {
             type: 'input',
            message:"Features",
            name: 'features',
            validate: (value) => { if (value) { return true } else { return 'You need a value to continue' } }

        },
          {
             type: 'input',
            message:"Tests",
            name: 'tests',
            validate: (value) => { if (value) { return true } else { return 'You need a value to continue' } }

        },
        {
            type: 'list',
            message: 'What license was used?',
            name: 'license',
            choices: ['The MIT License', 'The GPL License', 'Apache License', 'GNU License', 'N/A'],
            validate: (value) => { if (value) { return true } else { return 'You need a value to continue' } }
        },
          {
             type: 'input',
            message:"Github Username:",
            name: 'git',
            validate: (value) => { if (value) { return true } else { return 'You need a value to continue' } }
        },
            {
             type: 'input',
            message:"Tests",
            name: 'tests',
            validate: (value) => { if (value) { return true } else { return 'You need a value to continue' } }

        },
]  
).then(({

        title,
        description,
        installation,
        instructions,
        usage, 
        credits, 
        features,
        tests,
        license,
        git
})=>{
    
    const template = `# ${title}
    
    [Installation] (#installation)
    [Usage] (#usage)
    [Credits] (#credits)
    [License] (#license)
    #Installation
    ${installation}
    ## Usage
    ${usage}
    ##Instructions
    ${instructions}
    ##Credits
    ${credits}
    ##License
    ${license}

    #Contact
    Github: ${git}`;
// TODO: Create a function to write README file
createNewFile(title, template);
}
);

function createNewFile(fileName, template) {
    fs.writeFile(`./${fileName.toLowerCase().split('').join('')}.nd`, data, (err) => {
        if (err) {
            console.log(err)
        }
        console.log('Your README has been generated');
    })
}

module.exports = generateMarkdown;