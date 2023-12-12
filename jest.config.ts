// jest.config.js or jest.config.ts
export default {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.(js|jsx|ts|tsx|mjs)$': 'ts-jest',
    },
    moduleNameMapper: {
        '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'identity-obj-proxy',
    },
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};
