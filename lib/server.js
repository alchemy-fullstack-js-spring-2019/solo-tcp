const net = require('net');

// every client is a socket
const server = net.createServer(client => {
  console.log('Client connected.');
  client.on('data', data => {
    console.log(data.toString());
  });
});

// has to be 1050 < x < 60000
server.listen(7890);
