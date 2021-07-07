const inquirer = require('inquirer');
const fs = require("fs")

const questions = [
  "What is your name?",
  "Where are you located?",
  "Give a description of yourself: ",
  'What is the URL to your LinkedIn?',
  "What is the URL to you GitHub?",
  "List your favorite movies: ",
  "List your favorite songs: ",
  "List your favorite books: "
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
    }, 
    {
      type: "input",
      name: 'movies',
      message: questions[5]
    },
    {
      type: "input",
      name: 'songs',
      message: questions[6]
    },
    {
      type: "input",
      name: 'books',
      message: questions[7]
    }

  ])
    .then(response => {
      let user = {
        name: response.name,
        location: response.location,
        description: response.description,
        linkedIn: response.linkedIn,
        github: response.github,
        movies: response.movies,
        songs: response.songs,
        books: response.books
      };
      
      buildHTML(user);
      buildHTMLfavs(user);
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
  <p>${user.description}</p>
  <a href="${user.linkedIn}" class="links">LinkedIn</a>
  <a href="${user.github}" class="links">Github</a>
</div>
</body>
</html>
`;

  let fileNameFaves = `${user.name.replace(' ', "_")}.html`
  fs.writeFile(fileNameFaves, html, (err) => {
    if (err) throw err;
    console.log('Saved!');
  });
};

  const buildHTMLfavs = (user) => {
    htmlFaves = `
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
  <p>Movie: ${user.movies}</p>
  <p>Songs: ${user.songs}</p>
  <p>Books: ${user.books}</p>
</div>
</body>
</html>
`
  let fileName = `${ user.name.replace(' ', "_") }-faves.html`
  fs.writeFile(fileName, htmlFaves, (err) => {
    if (err) throw err;
    console.log('Saved!');
  });
}
