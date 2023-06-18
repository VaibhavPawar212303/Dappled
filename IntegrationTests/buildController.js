var fs = require("fs");
var Build_Id =
  "quies" + Math.floor(Math.random() * (1 - 10 + 10000)) + 10 + "mkfse";

const passBuildData = (results) => {
  var status = results.status;
  var startedTestsAt = results.startedTestsAt;
  var endedTestsAt = results.endedTestsAt;
  var totalDuration = results.totalDuration;
  var totalSuites = results.totalSuites;
  var totalTests = results.totalTests;
  var totalPassed = results.totalPassed;
  var totalPending = results.totalPending;
  var totalFailed = results.totalFailed;
  var totalSkipped = results.totalSkipped;
  var browserName = results.browserName;
  var browserVersion = results.browserVersion;
  var osName = results.osName;
  var osVersion = results.osVersion;
  var cypressVersion = results.cypressVersion;
  var baseUrl = results.config.baseUrl;
  var configFile = results.config.configFile;
  var projectName = results.config.projectName;
  var repoRoot = results.config.repoRoot;
  var browserName = results.config.browsers;
  var retries = results.config.resolved.retries;
  var screenshotsFolder = results.config.resolved.screenshotsFolder;
  var specPattern = results.config.resolved.specPattern;

  fetch("http://localhost:8000/api/build", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ProjectName: "Dappled",
      Build_Description: "Visual Testing",
      Build_Id: Build_Id,
      BuildData: {
        status: status,
        startedTestsAt: startedTestsAt,
        endedTestsAt: endedTestsAt,
        totalDuration: totalDuration,
        totalSuites: totalSuites,
        totalTests: totalTests,
        totalPassed: totalPassed,
        totalPending: totalPending,
        totalFailed: totalFailed,
        totalSkipped: totalSkipped,
        browserName: browserName,
        browserVersion: browserVersion,
        osName: osName,
        osVersion: osVersion,
        cypressVersion: cypressVersion,
        config: {
          baseUrl: baseUrl,
          configFile: configFile,
          projectName: projectName,
          repoRoot: repoRoot,
          resolved: {
            retries: retries,
            screenshotsFolder: screenshotsFolder,
            specPattern: specPattern,
          },
        },
      },
    }),
  });
};

const uploadTest = (results) => {
  results.runs.forEach((element, i) => {
    var testId = i + 1;
    var stats = element.stats;
    var reporterStats = element.reporterStats;
    var tests = element.tests;
    var spec = element.spec;
    var video = element.video;

    fetch("http://localhost:8000/api/build/testupload", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        Build_Id: Build_Id,
        testId,
        stats,
        reporterStats,
        tests,
        video,
        spec,
      }),
    });
  });
};

module.exports = {
  passBuildData,
  uploadTest,
};
