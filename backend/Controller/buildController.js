const asyncHandler = require("express-async-handler");
const Build = require('../model/buildModel');
// const fsPromises = require("fs").promises;
// const fs = require("fs");
//const buildData = require("../build.json");

const getBuilds = asyncHandler(async (req, res) => {
  const builds = await Build.find()
  res.status(200).json(builds);
})

const getBuildById = asyncHandler(async (req, res) => {

})

const setBuild = asyncHandler(async (req, res) => {

  var ProjectName = req.body.ProjectName;
  var Build_Description = req.body.Build_Description;
  var status = req.body.status;
  var BuildStartAt = req.body.BuildStartAt;
  var BuildEndAt = req.body.BuildEndAt;
  var totalTests = req.body.totalTests;
  var totalTestsSkipped = req.body.totalTestsSkipped;

  if (!status) {
    res.status(400)
    throw new Error("status is required");
  } else if (!ProjectName) {
    res.status(400)
    throw new Error("Project Name is required");
  } else {
    const build = await Build.create({
      ProjectName,
      Build_Description,
      status,
      BuildStartAt,
      BuildEndAt,
      totalTests,
      totalTestsSkipped
    })

    res.status(200).json(build);
  }

})

const deleteBuild = asyncHandler((req, res) => {
  res.status(200).json({ message: `delete build ${req.params.id}` });
})

module.exports = { getBuilds, setBuild, deleteBuild, getBuildById };
