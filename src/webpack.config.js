const CompressionPlugin = require('compression-webpack-plugin');

 

module.exports = function mutateBrowserConfig(config) {

if (config.mode === 'production') {

config.plugins.push(new CompressionPlugin({

compressionOptions: { level: 1 },

minRatio: 0.8,

algorithm: "gzip",

}));

}

};