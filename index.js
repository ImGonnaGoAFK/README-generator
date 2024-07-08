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

    .then((data) => {
        var badgeLink = "";
        if (`${data.license}` === "mit") {
            badgeLink = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
        }
        else if (`${data.license}` === "apache") {
            badgeLink = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
        }
        else {
            badgeLink = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
        }

        console.log(data.license)
        console.log(badgeLink)
        const myReadme =`# ${data.title}

${badgeLink}
## Description
${data.discription}

## Table of Content
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Test](#tests)
- [Question](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
This application license is covered by ${data.license}

## Contributing
${data.contribute}

## Tests
${data.test}

## Questions
You can see more of my projects on my github page: https://github.com/${data.username}/
or contact me via email at: ${data.email}
`;

    fs.writeFile('README.md', JSON.stringify(myReadme), (err) =>
        err ? console.error(err) : console.log('created file'));
})

