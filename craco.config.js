const path = require('path');
module.exports = {
    jest: {
        configure: {
            moduleNameMapper: {
                "^@/(.*)$": "<rootDir>/src/$1"
            },
            preset: 'ts-jest'
        }
    },
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        }
    }
};
