module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest', // Use ts-jest for transforming TypeScript files
    '^.+\\.(js|jsx|mjs|cjs|ts|tsx)$': 'babel-jest', // Use babel-jest for JS/JSX/TS/TSX files
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'], // Ensure Jest knows how to handle these extensions
  transformIgnorePatterns: ['node_modules/(?!(@babel|some-other-library)/)'], // Handle specific node_modules if needed
};
