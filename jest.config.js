module.exports = {
    // setupTestFrameworkScriptFile has been deprecated in
    // favor of setupFilesAfterEnv in jest 24,
    preset: "jest-playwright-preset",

    setupFilesAfterEnv: ['./jest.setup.js']
  }