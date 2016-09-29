module.exports = {
	entry: [
		'./src/js/lightbox-jquery.js'
		// './src/js/lightbox.js'
	],
	output: {
		path: __dirname + '/src/js',
		publicPath: '/',
		filename: 'bundle.js',
		library: 'Lightbox'
	},
	module: {
		loaders: [{
			test: /\.js?$/,
			exclude: /node_modules/,
			loader: 'babel'
		}]
	},
	resolve: {
		extensions: ['','.js']
	},
	devServer: {
		contentBase: './src'
	}
};