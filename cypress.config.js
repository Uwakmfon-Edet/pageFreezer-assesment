const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.grammarly.com/",
    viewportHeight: 900,
    viewportWidth: 1400,
    watchForFileChanges: false,
    defaultCommandTimeout: 30000,
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true,
    reporter: "../node_modules/mochawesome/src/mochawesome.js",
    reporterOptions: {
      overwrite: true,
      html: true,
      json: true,
    },

    setupNodeEvents(on, config) {
      on("before:browser:launch", (browser, launchOptions) => {
        launchOptions.extensions.push(
          "extensions/Grammarly-Grammar-Checker-and-Writing-App.zip"
        );

        return launchOptions;
      });
    },
  },
});
