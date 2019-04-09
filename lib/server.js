const net = require('net');

const server = net.createServer(client => {
  console.log('Client connected.');

  client.on('data', data => {
    console.log(data);
    client.write(`ECHO FROM SERVER: ${data}`);
  });
});

server.listen(7890);
