module.exports = {
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
    moduleNameMapper: {
      "^@/(.*)$": "<rootDir>/src/$1",
    },
    transform: {
      "^.+\\.tsx?$": "ts-jest",
    },
    // Add the following options:
    collectCoverage: true, // Ensures Jest always collects coverage
    collectCoverageFrom: [
      "src/**/*.{js,jsx,ts,tsx}", // Specify files to include
      "!src/**/index.ts",         // Optionally exclude files
    ],
    coverageDirectory: "coverage", // Where coverage reports will be stored
    coverageReporters: [
      "text-summary", // Outputs summary to console
      "lcov",         // Generates lcov info for external tools
      "html",         // Creates a human-readable HTML report
    ],
  };