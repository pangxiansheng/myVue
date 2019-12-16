module.exports = {
	baseUrl: '/',
    devServer: {
        proxy: {
                '/api': {
                  target: 'http://localhost:8081',
                  changeOrigin: true,
				  ws:true,
                  pathRewrite: {
					 "^/api": ""
				  }
                }
              }
    }
}