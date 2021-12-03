
module.exports = {
 devServer: {
		compress: true,
		disableHostCheck: true, 
		headers: { "Access-Control-Allow-Origin": "*" },
		proxy: {
      '/api': {
        target: 'https://192.168.110.180',
        ws: true,
        changeOrigin: true
      }
    }
	},
	chainWebpack: config => {
		config
			.plugin('html')
			.tap(args => {
					args[0].title = "FileVista";
					return args;
		})
  }
}
