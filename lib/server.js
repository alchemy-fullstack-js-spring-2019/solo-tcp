const net = require('net');

// every client is a socket
const server = net.createServer(client => {
  console.log('Client connected.');

  // client.pipe(client);
  client.on('data', data => {
    console.log(data);
    client.write(`ECHO FROM SERVER: ${data}`);
  });
});

// has to be 1050 < x < 60000
server.listen(7890);
