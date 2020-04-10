const inquirer = require('inquirer');
const fs = require('fs');
// const badgeFactory = require('gh-badges');

var userArray = [];

inquirer
    .prompt([
        {
            type: "input",
            message: "what's the title for the repsitory?",
            name: "name"
        },
        {
            type: "input",
            message: "please describe this project?",
            name: "description"
        },
        {
            type: "editor",
            message: "please enter a table of contents?",
            default: " \n - this is the place for your table of contents \n - you can make a list here \n - this is how it works.",
            name: "contents"
        },
        {
            type: "input",
            message: "please explain the installation process.",
            name: "installDoc"
        },
        {
            type: "editor",
            message: "how will the app be used?",
            default: " \n this is the default message for the editor. \n * what will this do. \n * will it work twice? \n * will it work again?",
            name: "usage"
        },
        {
            type: "input",
            message: "GitHub Repository :",
            name: "github"
        },
        // {
        //     type: "input",
        //     message: "contributors: ",
        //     name: "contributors"
        // },
        // {
        //     type: "input",
        //     message: "tests: ",
        //     name: "tests"
        // },
        // {
        //     type: "input",
        //     message: "questions: ",
        //     name: "questions"
        // },
    ])
    .then(function (response) {
        thisName = response.name;

        console.log(response.name);
        // console.log(response.description);
        // console.log(response.contents);

        let writePage = `# ${response.name} \n ![i'm a link](https://img.shields.io/badge/license-MIT-blue.svg) \n ## description: \n ${response.description} this is some text. let's see how this looks on the page. maybe it'll look cool. maybe it won't. we'll see. \n ## contents: \n ${response.contents} \n ## installation documentation: \n ${response.installDoc} \n ## how will the app be used? : \n ${response.usage}`;




        responseJson = JSON.stringify(writePage);
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
