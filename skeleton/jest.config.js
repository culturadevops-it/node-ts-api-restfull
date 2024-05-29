/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/tests/**/*.test.ts'],
  detectOpenHandles: true,
  forceExit: true,
  displayName: {
    name: "template.service",
    color: "orange",
  },
};