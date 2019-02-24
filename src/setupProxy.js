const proxy = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    proxy('/.netlify/lambda/', {
      target: 'http://localhost:9000/',
      pathRewrite: {
        '^/\\.netlify/lambda': '',
      },
    }),
  );
};