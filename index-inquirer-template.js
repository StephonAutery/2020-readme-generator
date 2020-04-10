var inquirer = require('inquirer');
var fs = require('fs');
console.log("you made it!");
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
            type: "input",
            message: "please enter a table of contents?",
            name: "contents"
        },
        {
            type: "input",
            message: "please explain the installation process.",
            name: "installDoc"
        },
        {
            type: "input",
            message: "how will the app be used?",
            name: "usage"
        },
        {
            type: "input",
            message: "license: ",
            name: "license"
        },
        {
            type: "input",
            message: "license: ",
            name: "license"
        },
        
        {
            type: "checkbox",
            message: "what languages do you speak?",
            choices: ["french", "english", "german", "spanish", "greek"],
            default: ["english"],
            name: "languages"
        },
        {
            type: "list",
            message: "what is your prefered method of communication?",
            choices: ["phone", "text", "e-mail"],
            default: [2],
            name: "contact"
        }
    ])
    .then(function (response) {
        console.log(response.name);
        console.log(response.languages[0]);
        console.log(response.contact);
        responseJson = JSON.stringify(response);
        fs.appendFile('data.txt', responseJson + '\n', (err) => {
            if (err) throw err;
            console.log('you did it.');
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
