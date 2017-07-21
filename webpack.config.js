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
				test: /\.scss$/,
				loaders: ['style-loader', 'css-loader', 'sass-loader',
					'postcss-loader'
				]
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
		}),
		// new webpack.LoaderOptionsPlugin({
		// 	options: {
		// 		postcss: [
		// 			autoprefixer(),
		// 		]
		// 	}
		// })
	],
	devServer: {
		inline: true,
		port: 8081
	}
}