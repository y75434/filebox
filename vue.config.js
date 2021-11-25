
module.exports = {
 devServer: {
		compress: true,
		disableHostCheck: true, 
	},
	chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'FileVista'
        return args
      })
  }

}
