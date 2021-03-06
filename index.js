const inquirer = require('inquirer');
const fs = require('fs');

var userArray = [];

inquirer
    .prompt([
        {
            type: "input",
            message: "what's the title for the repsitory?",
            default: "2020 - readme generator",
            name: "name"
        },
        {
            type: "input",
            message: "please describe this project?",
            default: "a command-line application that dynamically generates a README.md file from a user's terminal input.",
            name: "description"
        },
        {
            type: "editor",
            message: "please enter a table of contents?",
            default: " \n - JavaScript \n - Node.JS \n - NPM \n - FS \n - inquirer",
            name: "contents"
        },
        {
            type: "editor",
            message: "please explain the installation process.",
            default: "dependencies: \n - inquirer \n - fs",
            name: "installDoc"
        },
        {
            type: "editor",
            message: "how will the app be used?",
            default: " \n the application is used to save the develper the trouble of formating a README.md file.",
            name: "usage"
        },
        {
            type: "input",
            message: "GitHub repository :",
            default: "[Stephon Autery on github](https://github.com/StephonAutery/2020-readme-generator)",
            name: "github"
        },
        {
            type: "input",
            message: "enter licensing info: ",
            default: "MIT",
            name: "license"
        },
        {
            type: "input",
            message: "enter contributors: ",
            default: "Stephon Autery",
            name: "contributing"
        },
        {
            type: "input",
            message: "questions: ",
            default: "no tests run",
            name: "tests"
        },
    ])

    .then(function (response) {
        let writePage = `# ${response.name} \n ![i'm_a_link](https://img.shields.io/badge/Stephon_Autery-let's_begin_here_...-goldenrod.svg) ![i'm a link](https://img.shields.io/badge/license-MIT-blue.svg) ![i'm_a_link](https://img.shields.io/badge/_ES_-_6_-green) ![i'm a link](https://img.shields.io/badge/_inquirer_-_7.1.0_-green>) ![i'm a link](https://img.shields.io/badge/_fs_-0.0.1_-orange.svg) \n ## description \n ${response.description} \n ## contents \n ${response.contents} \n ## installation documentation \n ${response.installDoc} \n ## how will the app be used? \n ${response.usage}  \n ## GitHub repository \n ${response.github} \n ## contributors \n ${response.contributing} \n ## testing \n ${response.tests} \n \n \n ## a photo of Stephon Autery \n \n \n ![i'm a link](./images/stephon-headshot-garden.jpg)`;
        fs.writeFile('README.md', writePage, 'utf8', (err) => {
            if (err) throw err;
        });
    })

    .catch(error => {
        if (error.isTtyError) {
            console.log("couldn't do it");
        } else {
            console.log("it's always something");
            throw (error);
        }
    });