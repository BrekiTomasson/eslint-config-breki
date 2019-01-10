module.exports = {
  "cache": true,
  "cacheDirectory": "<rootDir>/test/tmp",
  "collectCoverage": true,
  "collectCoverageFrom": [
    "**/*.js",
    "!**/node_modules/**",
    "!<rootDir>/test/coverage/**"
  ],
  "coverageDirectory": "<rootDir>/test/coverage/",
  "coveragePathIgnorePatterns": [
    "**/node_modules/**"
  ],
  "coverageReporters": [
    "lcov",
    "json",
    "text"
  ],
  "coverageThreshold": {
    "global": {
      "branches": 85,
      "functions": 85,
      "lines": 80,
      "statements": 80
    }
  },
  "displayName": "Source code tests",
  "moduleFileExtensions": [
    "js",
    "json"
  ],
  "forceCoverageMatch": [
    "<rootDir>/test/*.test.js"
  ],
  "runner": "jest-runner",
  "testLocationInResults": false,
  "testMatch": [
    "<rootDir>/test/*.test.js"
  ],
  "transform": {
    "^.+\\.js$": "babel-jest"
  },
  "watchPathIgnorePatterns": [
    "<rootDir>/node_modules/"
  ]
}
