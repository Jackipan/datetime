
const port = 8080

module.exports = {
  devServer: {
    port,
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
  }
}
