module.exports = {
  clearMocks: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx,mjs}',
    '!src/server/views/*',
    '!src/shared/constants/*',
    '!src/shared/Routes.js',
    '!src/client/index.js',
    '!src/server/server.js',
    '!src/shared/store/store.js',
    '!src/shared/styled/globalStyle.js',
  ],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$':
      '<rootDir>/src/shared/components/styled/globalStyle.js',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  coverageDirectory: 'coverage',
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  setupFiles: ['<rootDir>/enzyme.config.js'],
  testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
  testPathIgnorePatterns: ['\\\\node_modules\\\\'],
  testURL: 'http://localhost',
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  verbose: false,
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss)$': 'jest-transform-css',
  },
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFilesAfterEnv: ['./node_modules/jest-enzyme/lib/index.js'],
};
