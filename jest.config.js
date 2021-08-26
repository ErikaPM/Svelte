const {defaults} = require('jest-config');
module.exports = {
  //
  moduleFileExtensions: ['js', 'json', 'svelte', 'html'],
    testEnvironment: 'node',
    verbose: true,
    moduleDirectories: ['node_modules', 'src'],
    modulePaths: ['<rootDir>/src', '<rootDir>/node_modules'],
    moduleFileExtensions: ['js', 'json', 'svelte', 'html'],
    transformIgnorePatterns: ['node_modules/(?!(bootstrap)/)'],
    testPathIgnorePatterns: [
      '/build/',
      '/config/',
      '/data/',
      '/dist/',
      '/node_modules/',
      '/test/',
      '/vendor/'
    ],
    globals: {
      'js-jest': {
        jsConfig: './src/app/jsconfig.json'
      },
      NODE_ENV: 'test'
    }
  // ...
};