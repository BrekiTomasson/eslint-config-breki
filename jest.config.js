const join = require('path').join
const rootDir = join(__dirname, './')

module.exports = {
  preset: 'ts-jest',
  rootDir: `${rootDir}`,
  bail: true,
  clearMocks: true,
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  watchPlugins: ['jest-watch-master'],
  projects: [
    {
      displayName: 'Eslint',
      runner: 'jest-runner-eslint',
      testMatch: ['<rootDir>/**/src/*.js', '<rootDir>/**/src/*.ts'],
    },
    {
      displayName: 'Eslint Configuration by Breki',
      bail: true,
      testMatch: ['<rootDir>/dist/*.js'],
      collectCoverage: true,
      collectCoverageFrom: [
        '**/*.js',
        '!**/node_modules/**'
      ],
      coverageDirectory: '<rootDir>/test/coverage'
    },
    {
      displayName: 'Typescripty Goodness',
      runner: 'jest-runner-tsc',
      displayName: 'tsc',
      moduleFileExtensions: ['ts', 'tsx'],
      testMatch: ['<rootDir>/test/ts/*.test.js'],
    }
  ]

}

