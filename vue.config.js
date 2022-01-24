
module.exports = {
    devServer: {
           compress: true,
           //disableHostCheck: true, 
           // headers: { "Access-Control-Allow-Origin": "*" },
           // host: 'localhost',
       // port: 8081,
           // proxy: {
       //   '/api': {
       //     target: 'https://192.168.110.180:6100',
           // 		changeOrigin: true,
           // 		pathRewrite: {
       //       '^/api': '/'          
       //     }
           // 	},
           // 	'/put': {
       //     target: 'https://192.168.110.180:6101',// 要跨域的域名
           // 		changeOrigin: true, // 是否开启跨域
           // 		pathRewrite: {
       //       '^/put': '/'          
       //     }
       //   }
       // }
       },

    chainWebpack: config => {
		config
			.plugin('html')
			.tap(args => {
					args[0].title = "FileVista";
					return args;
		})
  },

    assetsDir: './vue.config.js'
}




