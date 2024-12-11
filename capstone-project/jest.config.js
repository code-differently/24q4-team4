module.exports = {
  // Define the test environment
  testEnvironment: "jsdom",

  // Setup files to run after the environment is set up
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],

  // Map module imports for easier path resolution
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },

  // Transform files using @swc/jest for JavaScript/TypeScript
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": "@swc/jest",
  },

  // Match test files in various directories
  testMatch: [
    "**/Test/**/*.[jt]s?(x)",
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)",
  ],

  // Collect coverage information
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/index.{js,ts}",
    "!src/**/*.d.ts",
    "!src/**/*.{stories,story}.{js,jsx,ts,tsx}",
  ],

  // Specify where to store coverage reports
  coverageDirectory: "coverage",

  // Define coverage report formats
  coverageReporters: ["text-summary", "lcov", "html"],

  // Optional: Increase timeout for slower tests
  testTimeout: 30000,

  // Optional: Configure verbose output
  verbose: true,
};