module.exports = {
    devServer: {
      proxy: {  
        '/api': {
          /* 目标代理服务器地址 */
          target: 'http://kumanxuan1.f3322.net:8001',
          /* 允许跨域 */
          changeOrigin: true,
          pathRewrite:{
              "^/api":""
          }
        },
      },
    },
  }
