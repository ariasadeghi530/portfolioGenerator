const inquirer = require('inquirer');
const fs = require("fs")

const questions = [
  "What is your name?",
  "Where are you located?",
  "Give a description of yourself:",
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
      
      buildHTML(user)
    })
}

init();

const buildHTML = (user) => {
html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${user.name} - Portfolio</title>
  <link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="./assets/reset.css">
  <link rel="stylesheet" href="./assets/styles.css">
</head>
<body> 
<div class='container'>
  <h1>Name: ${user.name}</h1>
  <h2>Location: ${user.location}</h2>
  <p>${}</p>
  <a href="${user.linkedIn}" class="links">LinkedIn</a>
  <a href="${user.github}" class="links">Github</a>
</div>
</body>
</html>
`

  const buildHTMLfavs = (user) => {
    html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${user.name} - Portfolio</title>
  <link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="./assets/reset.css">
  <link rel="stylesheet" href="./assets/styles.css">
</head>
<body> 
<div class='container'>
  <h1>Name: ${user.name}</h1>
  <p>Movie: ${}</p>
  <p>Songs: ${}</p>
  <p>Books: ${}</p>
</div>
</body>
</html>
`
  let fileName = `${ user.name.replace(' ', "_") }.html`
  fs.writeFile(fileName, html, (err) => {
    if (err) throw err;
    console.log('Saved!');
  });
}
