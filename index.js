const inquirer = require('inquirer');

const questions = [
  "What is your name?",
  "Where are you located?",
  "Give a description of yourself.",
  'What is the URL to your LinkedIn?',
  "What is the URL to you GitHub?"
];

function init() {
  inquirer.prompt([
    {
      type: "input",
      name: 'name',
      message: questions[0]
    },
    {
      type: "input",
      name: 'location',
      message: questions[1]
    },
    {
      type: "input",
      name: 'description',
      message: questions[2]
    },
    {
      type: "input",
      name: 'linkedIn',
      message: questions[3]
    },
    {
      type: "input",
      name: 'github',
      message: questions[4]
    }
  ])
    .then(response => {
      let user = {
        name: response.name,
        location: response.location,
        description: response.description,
        linkedIn: response.linkedIn,
        github: response.github
      };
      console.log(user);
    })
}

init();
