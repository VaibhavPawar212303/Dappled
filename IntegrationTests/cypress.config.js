const { defineConfig } = require("cypress");
const { initPlugin } = require("cypress-plugin-snapshots/plugin");
const { passBuildData, uploadTest } = require("./buildController");

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
        passBuildData(results);
        uploadTest(results);
      });
      return config;
    },
  },
});
