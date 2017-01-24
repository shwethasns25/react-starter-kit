const baseConfig = require('../webpack.config')
const path = require('path')

module.exports = storybookBaseConfig =>
  Object.assign({}, storybookBaseConfig, {
    resolve: baseConfig.resolve,
    module: Object.assign({}, storybookBaseConfig.module, {
      loaders: storybookBaseConfig.module.loaders.concat(baseConfig.module.loaders),
    }),
    sassLoader: {
      data: '@import "config";',
      includePaths: [path.resolve(__dirname, "../src/styles")]
    }
  })
