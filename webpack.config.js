var webpack = require("webpack");

module.exports = {
	context: __dirname,
	devtool: "eval-source-map",
	entry: "./src/js/main.js",
	output: {
		path: __dirname + "/dist",
		filename: "bundle.js"
	},
	module: {
		rules: [{
			enforce: "pre",
				test: /\.scss$/,
				loaders: ['sass-loader']
			},
			{
				test: /\.scss$/,
				loaders: ['style-loader', 'css-loader',  'postcss-loader']
			},
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env']
					}
				}
			}
		]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			minimize: true,
			compress: {
				warnings: false
			}
		})
	],
	devServer: {
		inline: true,
		port: 8081
	}
}