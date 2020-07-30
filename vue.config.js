
const port = 8080
const UglifyjsPlugin = require('uglifyjs-webpack-plugin');

const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  devServer: {
    port,
    host: "0.0.0.0",
    open: false,
    overlay: {
      warnings: false,
      erroes: true
    },
    proxy: {
      "/": {
        target: process.env.VUE_APP_URL,
        changeOrigin: true,
        ws: true,
      }
    },
    historyApiFallback: {
      index: '/index.html'
    }
  },
  chainWebpack: config =>{
    config.resolve.alias
      .set("@", resolve("src"))
  },
  // 是否打印 console 数据
  configureWebpack: {
    optimization: {
      minimizer: [
        new UglifyjsPlugin({
          uglifyOptions:{
            compress:{
              warnings: false,
              drop_console: true,         // console
              drop_debugger: false,
              pure_funcs: ["console.log"] // 移除console
            }
          }
        })
      ]
    }
  }
}
