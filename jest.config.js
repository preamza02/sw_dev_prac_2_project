module.exports = {
  preset: 'ts-jest', // This tells Jest to use ts-jest for transforming TypeScript
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest', // Ensure ts-jest transforms TypeScript and JSX files
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // Ensure jest.setup.ts exists
  testEnvironment: 'jest-environment-jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'], // Allow Jest to understand .ts, .tsx, .js, and .jsx files
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json', // Use your tsconfig.json for TypeScript settings
    },
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // Maps '@/' to the 'src/' directory
    '\\.(css|less|scss|svg)$': 'identity-obj-proxy',
  },
};
