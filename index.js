const inquirer = require('inquirer');
const fs = require('fs');
// const badgeFactory = require('gh-badges');

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
            default: " \n - JavaScript & HTML \n - NPM module \n - FS module \n - Node.JS",
            name: "contents"
        },
        {
            type: "editor",
            message: "please explain the installation process.",
            default: "dependencies: \n - NPM-Inquirer \n - NPM-fs \n - run: node index",
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
            default: "no tests were run",
            name: "tests"
        },
    ])

    .then(function (response) {
        // thisName = response.name;

        // console.log(response.name);

        let writePage = `# ${response.name} \n ![i'm a link](https://img.shields.io/badge/Stephon_Autery-let's_begin_here_...-goldenrod.svg) ![i'm a link](https://img.shields.io/badge/license-MIT-blue.svg) \n ## description: \n ${response.description} \n ## contents: \n ${response.contents} \n ## installation documentation: \n ${response.installDoc} \n ## how will the app be used? : \n ${response.usage}  \n ## GitHub repository: \n ${response.github} \n ## contributors: \n ${response.contributing} \n ## testing : \n ${response.tests} \n \n \n ## this is an image: \n \n \n ![i'm a link](./images/stephon-headshot-garden.jpg)`;

        // responseJson = JSON.stringify(writePage);
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
