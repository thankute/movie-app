const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = app => {
    app.use(
        createProxyMiddleware('/tim-kiem.json', {
            target: 'https://ophim.cc/_next/data/PmHNrWJW8IjPBQzY5I9eJ/',
            changeOrigin: true,
        })
    )
}
