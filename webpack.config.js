var debug = process.env.NODE_DEV !== "production";
var webpack = require('webpack');
const path = require('path');

module.exports = {
	context: __dirname + "/src/",
	entry: './js/index.js',
	module: {
		rules:[
		{
			test:/\.jsx?$/,
			exclude: /(node_modules)/,
			use: [{
				loader: 'babel-loader',
				options:{
					presets: ['@babel/preset-react','@babel/preset-env']
				}
			}],
		},
		]
	},
	output: {
		path: path.join(__dirname,'public'),
		filename: "index.min.js",
	},
	devServer:{
		contentBase: __dirname + "/public/",
		historyApiFallback: false,
	}
};
