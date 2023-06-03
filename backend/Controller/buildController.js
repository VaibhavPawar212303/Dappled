const fsPromises = require("fs").promises;
const fs = require("fs");

const buildData = require("../build.json");

const getBuilds = (req, res) => {
  res.status(200).json({ buildData });
};

const getBuildById = (req, res) => {
  var id = req.params.id;
  var BuildFound;
  fsPromises.readFile("build.json", "utf-8").then((data) => {
    let Builds = JSON.parse(data);
    let arrayLen = Builds.length;
    var testArray = [];
    for (var i = 0; i < arrayLen; i++) {
      if (Builds[i].Build_Id == id) {
        BuildFound = Builds[i].Build;
        BuildFound.forEach((test) => {
          var tests = test.tests;
          testArray.push(tests);
        });
      }
    }
    res.status(200).json({ BuidId: id, testArray });
  });
};

const setBuild = (req, res) => {
  var Build = req.body.runTestData;
  fsPromises.readFile("build.json", "utf-8").then((data) => {
    let json = JSON.parse(data);
    json.push({
      id: json.length + 1,
      Build_Id: json.length + 1,
      Build,
    });
    fs.writeFileSync("build.json", JSON.stringify(json), function (err) {
      if (err) throw err;
      console.log("Saved!");
    });
  });
};

const deleteBuild = (req, res) => {
  res.status(200).json({ message: `delete build ${req.params.id}` });
};

module.exports = { getBuilds, setBuild, deleteBuild, getBuildById };
