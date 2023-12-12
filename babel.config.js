// babel.config.js or babel.config.ts
module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current',
                },
            },
        ],
        '@babel/preset-react',
        '@babel/preset-typescript',
        '@babel/preset-modules', // Add this line
    ],
    plugins: [
        '@babel/plugin-transform-runtime',
    ],
};
