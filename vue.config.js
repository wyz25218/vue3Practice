'use strict'

// const path = require('path')

module.exports = {
    devServer: {
        open: false,
        host: 'localhost',
        port: 8080,
        https: false,
        proxy: {//配置跨域
            '/api': {
                target: 'https://blog',
                ws: true,
                changOrigin: true,//允许跨域
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}
