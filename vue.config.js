const port = 11590
const UglifyjsPlugin = require('uglifyjs-webpack-plugin')

const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  devServer: {
    port,
    host: '0.0.0.0',
    open: false,
    overlay: {
      warnings: false,
      erroes: true,
    },
    disableHostCheck: true,
    proxy: {
      '/': {
        target: process.env.VUE_APP_URL,
        changeOrigin: true,
        ws: true,
      },
    },
    historyApiFallback: {
      index: '/index.html',
    },
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assert', resolve('src/assets'))

    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/assets/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      })
      .end()
  },
  // 是否打印 console 数据
  configureWebpack: {
    optimization: {
      minimizer: [
        new UglifyjsPlugin({
          uglifyOptions: {
            compress: {
              warnings: false,
              drop_console: true, // console
              drop_debugger: false,
              pure_funcs: ['console.log'], // 移除console
            },
          },
        }),
      ],
    },
  },
  css: {
    loaderOptions: {
      sass: {
      },
    },
  },
}
