const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vueportfolio/' 
    : '/',
  outputDir: 'docs',

  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = "RFSYNZ Portfolio"
      return args;
    });
  }
});