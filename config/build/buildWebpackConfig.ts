import {BuildOptions} from "./types/config";
import webpack from "webpack";
import path from "path";
import {buildLoader} from "./buildLoader";
import {buildResolvers} from "./buildResolvers";
import {buildPlugins} from "./buildPlugins";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {mode, paths} = options;

    return {
        mode: mode,
        entry: paths.entry,
        module: {
            rules: buildLoader(),
        },
        resolve: buildResolvers(),
        output: {
            filename: "[name],[contenthash].js",
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins(options)
    }
}
