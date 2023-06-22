const asyncHandler = require("express-async-handler");
const Build = require("../model/buildModel");
const Test = require("../model/testModel");

const getBuilds = asyncHandler(async (req, res) => {
  const builds = await Build.find();
  res.status(200).json(builds);
});

const getBuildById = asyncHandler(async (req, res) => {
  var buildId = req.params.id;
  if (!buildId) {
    res.status(400);
    throw new Error("build Id is required");
  } else {
    const buildDetails = await Build.findById(buildId);
    res.status(200).json(buildDetails);
  }
});

const getTestByBuildId = asyncHandler(async (req, res) => {
  var Build_Id = req.params.Build_Id;
  if (!Build_Id) {
    res.status(400);
    throw new Error("Build Id is required");
  } else {
    const test = await Test.find({ Build_Id: `${Build_Id}` });
    res.status(200).json(test[0].video.data.toString("base64"));
  }
});

const uploadTest = asyncHandler(async (req, res) => {
  var fs = require("fs");
  var Build_Id = req.body.Build_Id;
  var testId = req.body.testId;
  var stats = req.body.stats;
  var reporterStats = req.body.reporterStats;
  var video = req.body.video;
  var tests = req.body.tests;
  var spec = req.body.spec;

  var fileData = fs.readFileSync(video);
  const fileBuffer = new Buffer.from(fileData);

  if (!Build_Id) {
    res.status(400);
    throw new Error("Build_Id is required");
  } else {
    const test = await Test.create({
      Build_Id,
      testId,
      stats,
      reporterStats,
      tests,
      video: {
        data: fileBuffer,
        contentType: "video/mp4",
      },
      spec,
    });
    res.status(200).json(test);
  }
});

const setBuild = asyncHandler(async (req, res) => {
  var ProjectName = req.body.ProjectName;
  var Build_Description = req.body.Build_Description;
  var Build_Id = req.body.Build_Id;
  var BuildData = req.body.BuildData;
  if (!ProjectName) {
    res.status(400);
    throw new Error("Project Name is required");
  } else {
    const build = await Build.create({
      ProjectName,
      Build_Description,
      Build_Id,
      BuildData,
    });
    res.status(200).json(build);
  }
});

const deleteBuild = asyncHandler((req, res) => {
  res.status(200).json({ message: `delete build ${req.params.id}` });
});

module.exports = {
  getBuilds,
  setBuild,
  deleteBuild,
  getBuildById,
  uploadTest,
  getTestByBuildId,
};
