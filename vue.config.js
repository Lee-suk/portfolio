const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // 경로 지정
  publicPath: "/portfolio",
  transpileDependencies: [
    'vuetify'
  ],
  lintOnSave: false
})
