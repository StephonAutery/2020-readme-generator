const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

inquirer
  .prompt({
    message: "Enter your GitHub username:",
    name: "username"
  })

  .then(function({ username }) {
    const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
    const queryUrl_2 = `https://api.github.com`

    axios.get(queryUrl).then(function(res) {
      const resData = res.data;
      const resRepo = res.data.map(function(repo) {
        return repo.name;
      });

    axios.get(queryUrl_2).then(function(res) {
            const resData_2 = res.data;
      // const resData = res.data;
      // const resRepo = res.data.map(function(repo) {
      //   return repo.name;
      });

      const resRepoStr = resRepo.join("\n");

      fs.writeFile("repos.txt", resRepoStr, function(err) {
        if (err) {
          throw err;
        }

        console.log(`Saved ${resRepo.length} repos`);
        // console.log(resData);
        console.log(resData_2);
      });
    });
  });                      
