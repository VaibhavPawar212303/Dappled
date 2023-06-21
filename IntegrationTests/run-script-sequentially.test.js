//get the knowledge of the fs module of the node js
var fs = require("fs");
var path = require("path");
var readline = require("readline-sync");
var execSync = require("child_process").execSync;


var filePath = readline.question("What is your file path?");
const directoryPath = path.join(__dirname, filePath);

fs.readdir(directoryPath, (err, files, on) => {
  //handling error
  if (err) {
    return console.log("Unable to scan directory: " + err);
  }
  //run all spec files one after another
  execSync(
    `npx cypress run --spec "${filePath}/**/*.spec.cy.js --headed"`,
    (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
      console.error(`stderr: ${stderr}`);
      process.exit();
    }
  );
});
