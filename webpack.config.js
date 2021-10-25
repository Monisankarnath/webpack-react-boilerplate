const path = require('path');

let mode= "development"
if(process.env.NODE_ENV === "production"){
    mode = "production"
}

module.exports = {
    mode: mode,
    
    module : {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    devServer: {
        static: './dist',
        port: 3010
    }
}