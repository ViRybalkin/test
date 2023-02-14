import webpack from "webpack";
import {Plugins} from "./plugins";
import {Rules} from "./rules";
import {Extensions} from "./Extensions";
import {WebpackBuildOption} from "./types";
import {buildDevServer} from "./buildDevServer";

export const WebpackBuilder =  (options: WebpackBuildOption): webpack.Configuration => {
    return {
        mode: options.mode,
        entry: options.path.entry,
        output: {
            path: options.path.output,
            filename: '[name].[contenthash].js',
            clean: true,
        },
        plugins: Plugins(options.path.html),
        module: {
        rules: Rules(options.isDev),
        },
        devtool: options.isDev ? 'inline-source-map' : undefined,
        resolve: Extensions(),
        devServer: options.isDev ? buildDevServer(options.port) : undefined,
    }
}