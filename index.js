const inquirer = require('inquirer');
const fs = require('fs');
const badgeFactory = require('gh-badges');

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
            default: " \n #### this is the default message for the editor. \n * what will this do. \n * will it work twice? \n * will it work again?",
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

        let stephon = "stephon"

       let writePage =  `# ${response.name}     
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="142" height="20"><linearGradient id="b" x2="0" y2="100%"><stop offset="0" stop-color="#bbb" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient><clipPath id="a"><rect width="142" height="20" rx="3" fill="#fff"/></clipPath><g clip-path="url(#a)"><path fill="#555" d="M0 0h55v20H0z"/><path fill="#007ec6" d="M55 0h87v20H55z"/><path fill="url(#b)" d="M0 0h142v20H0z"/></g><g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="110"> <text x="285" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="450">stephon</text><text x="285" y="140" transform="scale(.1)" textLength="450">stephon</text><text x="975" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="770">he&apos;s awesome</text><text x="975" y="140" transform="scale(.1)" textLength="770">he&apos;s awesome</text></g> </svg>
## description: \n ${response.description}
this is some text. let's see how this looks on the page. maybe it'll look cool. maybe it won't. we'll see.
## contents: \n ${response.contents}
## installation documentation: \n ${response.installDoc} 
  ![i'm a link](https://img.shields.io/badge/license-MIT-blue.svg)  
  ${response.usage}`;




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
