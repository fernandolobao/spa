const { jest: jestConfig } = require('kcd-scripts/config');

const esModules = [
  'date-fns',
].join('|');

module.exports = Object.assign(jestConfig, {
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  verbose: true,
  bail: 3,
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/__tests__/__mocks__/fileMock.js',
  },
  transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
  moduleDirectories: ['src', 'node_modules'],
  testMatch: [
    '<rootDir>/src/Components/**/*.+(test|spec).+(js|jsx)',
  ],
});
