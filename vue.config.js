
module.exports = {
    devServer: {
           compress: true,
       },

    chainWebpack: config => {
		config
			.plugin('html')
			.tap(args => {
					args[0].title = "CyberMetaQ";
					return args;
		})
  },

    assetsDir: './vue.config.js'
}




