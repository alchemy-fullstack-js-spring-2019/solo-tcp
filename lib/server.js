const net = require('net');


const server = net.createServer(client => {
  console.log('client connected');

  client.on('data', data => {
    client.write(`ECHO FROM SERVER ${data}`);
  });
});

server.listen(1176);
