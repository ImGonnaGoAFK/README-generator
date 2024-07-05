const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the project title?',
            name: 'title',
        },

        {
            type: 'input',
            message: 'What is the project discription?',
            name: 'discription',
        },

        {
            type: 'input',
            message: 'What are the installation instructions (put n/a if not applicable)',
            name: 'installation'
        },
        {
            type: 'input',
            message: 'Provide information on how to use the program?',
            name: 'usage'
        },
        {
            type: 'input',
            message: 'Provide how to contribute information (n/a if not applicable)',
            name: 'contribute',
        },

        {
            type: 'input',
            message: 'How to test the program instruction',
            name: 'test',
        },
        {
            type: 'list',
            message: 'What type of license does this program have?',
            name: 'license',
            choices: ['mit', 'apache', 'bsd'],
        },

        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'username',
        },

        {
            type: 'input',
            message: 'What is your email?',
            name: 'email',
        },

    ])
