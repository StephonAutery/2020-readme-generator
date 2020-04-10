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
        // {
        //     type: "input",
        //     message: "please explain the installation process.",
        //     name: "installDoc"
        // },
        // {
        //     type: "input",
        //     message: "how will the app be used?",
        //     name: "usage"
        // },
        // {
        //     type: "input",
        //     message: "license: ",
        //     name: "license"
        // },
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
        console.log(response.name);
        console.log(response.description);
        console.log(response.contents);



       let writePage =  `# Stephon-Autery-UIKit-Portfolio
        A portfolio built using UIKit.
        

        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="142" height="20"><linearGradient id="b" x2="0" y2="100%"><stop offset="0" stop-color="#bbb" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient><clipPath id="a"><rect width="142" height="20" rx="3" fill="#fff"/></clipPath><g clip-path="url(#a)"><path fill="#555" d="M0 0h55v20H0z"/><path fill="#007ec6" d="M55 0h87v20H55z"/><path fill="url(#b)" d="M0 0h142v20H0z"/></g><g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="110"> <text x="285" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="450">stephon</text><text x="285" y="140" transform="scale(.1)" textLength="450">stephon</text><text x="975" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="770">he&apos;s awesome</text><text x="975" y="140" transform="scale(.1)" textLength="770">he&apos;s awesome</text></g> </svg>


        css, javascript, UIKit CSS Framwork and JQuery are used.
        
        ## Site Picture
        ![Site](/images/app-snap-shot.PNG)
        
        
        ## Technologies Used
        * [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
        * [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
        * [javaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
        * [UIKit](https://getuikit.com/docs/introduction)
        - [GitLab](https://gitlab.com/) - version control system to track changes to source code
        - [GitHub](https://github.com/) - hosts repository that can be deployed to GitHub Pages
        
        
        ## Deployed Link
        
        * [see live site](https://stephonautery.github.io/Stephon-Autery-UIKit-Portfolio/)
        * [github repository](https://github.com/StephonAutery/2020-stephon-autery-a-timed-quiz)
        
        ## Authors
        
        * **Stephon Autery** 
        
        - [link to portfolio Site](https://github.com/StephonAutery)
        - [link to LinkedIn](https://www.linkedin.com/in/stephon-a-1bb575198/)
        
        ## License
        
        This project is in the public domain.
        
        images: copyright Stephon Autery
        
        ## Acknowledgments
        
        * UCBerkeley Coding Bootcamp is still Awesome!`;
        


        responseJson = JSON.stringify(response);
        // fs.appendFile('README-sla.md', responseJson + '\n', (err) => {
        fs.appendFile('README-sla.md', writePage, (err) => {
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
