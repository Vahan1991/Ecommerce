module.exports = {
    launchOptions: {
      headless: true
    },
    contextOptions: {
      ignoreHTTPSErrors: true,
      viewport: {
        width: 1920,
        height: 1080
      }
    },
    browsers: ["chromium"], //browsers: ["chromium", "firefox"],
    devices: []
  }