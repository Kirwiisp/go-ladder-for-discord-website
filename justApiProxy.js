const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
const { createProxyMiddleware } = require('http-proxy-middleware');

// Proxy to Gold API
app.use('/api', createProxyMiddleware({ 
  target: 'http://87.106.194.190:4567',
  changeOrigin: true,
  pathRewrite: { '^/api': '/gold/api' }  // [/api/games] => [$target/gold/api/games]
}));
app.listen(port);