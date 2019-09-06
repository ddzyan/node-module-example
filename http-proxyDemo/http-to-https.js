const http = require('http');
const https = require('https');
const httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer({
  xfwd: true,
  secure: false,
  preserveHeaderKeyCase: true,
  proxyTimeout: 10000
});

proxy.on('proxyReq', function(proxyReq, req, res, options) {
  console.log(`${proxyReq.method} ${options.target.href}${proxyReq.path}`);

  proxyReq.setHeader('X-Special-Proxy-Header', 'foobar');
});

proxy.on('error', function(error) {
  console.log(error);
});

proxy.on('close', function(res, socket, head) {
  // view disconnected websocket connections
  console.log('Client disconnected');
});

proxy.on('open', function(proxySocket) {
  // listen for messages coming FROM the target here
  proxySocket.on('data', hybiParseAndLogMessage);
});

proxy.on('proxyRes', function(proxyRes, req, res) {
  let body = Buffer.from('');
  proxyRes.on('data', function(data) {
    body = Buffer.concat([body, data]);
  });
  proxyRes.on('end', function() {
    body = body.toString();
    //console.log('res from proxied server:', body);
    res.end('my response to cli');
  });
});

http
  .createServer(function(req, res) {
    proxy.web(req, res, { target: 'https://api.eospark.com', agent: https.globalAgent, preserveHeaderKeyCase: true, headers: { host: 'api.eospark.com' } }, function(e) {
      console.log(e);
    });
  })
  .listen(3000);
