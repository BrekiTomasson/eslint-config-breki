module.exports = {
  verbose: true,
  cache: true,
  cacheDirectory: "./tmp",
  collectCoverage: true,
  testMatch: ["<rootDir>/*.test.js"],
  collectCoverageFrom: [
    "../**/*.js",
    "!**/node_modules/**",
    "!./test/coverage/**"
  ],
  coverageDirectory: "./coverage/",
  coveragePathIgnorePatterns: ["node_modules"],
  coverageReporters: ["lcov", "json", "text"],
  coverageThreshold: {
    global: {
      branches: 85,
      functions: 85,
      lines: 80,
      statements: 80
    }
  },
  displayName: "Source code tests",
  moduleFileExtensions: ["js", "json"],
  forceCoverageMatch: [
    "./*.test.js"
  ],
  runner: "jest-runner",
  testLocationInResults: true,
  transform: { "^.+\\.js$": "babel-jest" }
}
