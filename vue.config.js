module.exports = {
  outputDir: 'dist',
  lintOnSave: true,
  publicPath: './',
  devServer: {
    proxy: {
      "^/v1": {
        target: "https://devapi.apiferry.io",
        changeOrigin: true,
        logLevel: "debug",
        pathRewrite: { "^/v1": "/v1" }
      }
    }
  },
  
}
  