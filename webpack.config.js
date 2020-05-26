//webpack.config.js
const path = require('path')

module.exports = {
    watch: false,
    entry: "./src/index.js",
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, 'public')
    },

//loader config
module: {
    rules: [
        {
            test: /¥.txt$/,
            use: "raw-loader"
        },
        {
            test: /¥.js$/,
            use: {
                loader: "babel-loader",
                options: {
                    preser: ['env', 'react']
                }
            },
            exclude: /node_modules/
        }
    ]
}
  }