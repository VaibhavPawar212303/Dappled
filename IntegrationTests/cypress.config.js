const { defineConfig } = require("cypress");
const { initPlugin } = require("cypress-plugin-snapshots/plugin");
const { passBuildData } = require("./buildController");
var readline = require("readline-sync");

module.exports = defineConfig({
  e2e: {
    // reporter: "cypress-mochawesome-reporter",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      initPlugin(on, config);
      const version = config.env.version || "test";
      //setup the config
      config.env = require(`./cypress/config/${version}.env.json`);
      config.baseUrl = config.env.baseUrl;
      on("after:run", (results) => {
        var status = results.status;
        var startAt = results.startedTestsAt;
        var endAt = results.endedTestsAt;
        var totalTests = results.totalTests;
        var skipped = results.totalSkipped;
        passBuildData(status, startAt, endAt, totalTests, skipped);
      });
      return config;
    },
  },
});
