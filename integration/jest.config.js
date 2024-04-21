//global setup and teardown for jest

module.exports = {
  testEnvironment: "node",
  globalSetup: "<rootDir>/jestConfig/setup.js",
  // globalTeardown: "<rootDir>/jestConfig/teardown.js", // wyczysc baze danych
};
