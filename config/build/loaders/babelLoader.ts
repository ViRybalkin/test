export const babelLoader = (isDev: boolean, isTsx: boolean) => {
    return {
        test: isTsx ? /\.(|jsx|tsx)$/ : /\.(js|ts)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                        "@babel/plugin-transform-typescript", {
                        isTsx,
                    }
                    ],
                    '@babel/plugin-transform-runtime',
                    isDev && require.resolve('react-refresh/babel')].filter(Boolean),
            },
        },
    }
}