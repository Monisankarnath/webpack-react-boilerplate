const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")

let mode= "development"
let target = "web"

if(process.env.NODE_ENV === "production"){
    mode = "production";
    target = "browserslist"
}

module.exports = {
    mode: mode,
    target: target,
    output: {
        path: path.resolve(__dirname,'dist'),
        assetModuleFilename: "images/[hash][ext][query]",
    },
    module : {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: "asset", //  asset/resource, asset/inline
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"]
            }
        ]
    },
    plugins: [new CleanWebpackPlugin(), new MiniCssExtractPlugin(), new HtmlWebpackPlugin({template: "./src/index.html"})],
    resolve: {
        extensions: [".js", ".jsx"]
    },
    devtool: "source-map",
    devServer: {
        static: './dist',
        port: 3010,
        hot: true
    }
}