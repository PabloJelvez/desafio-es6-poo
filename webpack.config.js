const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: {
        app: [
            "@babel/polyfill",
            "./src/index.js"
        ]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "./assets/js/bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/i,
                loader: "babel-loader"
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            minify: {
                collapseWhitespace: true,
                keepClosingSlash: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }
        }),
        new MiniCssExtractPlugin ({
            filename: "./assets/css/style.bundle.css"
        }),
        // new CopyWebpackPlugin({
        //     patterns: [
        //         { from: "./src/assets/img", to: "assets/img" },
        //       ],
        // })
    ]
};
