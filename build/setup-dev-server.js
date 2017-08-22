const webpack = require('webpack');
const clientConfig = require('./webpack.client.config');

module.exports = function(app, opts) {
    const clientCompiler = webpack(clientConfig);
    const devMiddleware = require('webpack-dev-middleware')(clientCompiler, {
        publicPath: clientConfig.output.publicPath,
        stats: {
            colors: false,
			modules: false,
			children: false,
			chunks: false,
			chunkModules: false
        }
    })
    app.use(devMiddleware);
    app.use(require('webpack-hot-middleware')(clientCompiler));
}