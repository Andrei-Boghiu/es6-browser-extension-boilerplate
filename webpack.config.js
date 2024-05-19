const path = require('path')

module.exports = {
	mode: 'development',
	entry: {
		background: './src/background.js',
		content: './src/content.js',
		popup: './src/popup/popup.js',
		options: './src/options/options.js',
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
		],
	},
	devtool: 'source-map',
}
