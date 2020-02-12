const inquirer = require('inquirer')
const fs = require('fs')

const writeToFile = (fileName, data) => {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log('Saved!');
  });
}
