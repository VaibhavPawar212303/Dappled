const { defineConfig } = require("cypress");
const { initPlugin } = require("cypress-plugin-snapshots/plugin");

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
        let runTestData = results.runs;
        fetch("http://localhost:8000/api/build", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ runTestData }),
        });
      });
      return config;
    },
  },
});
