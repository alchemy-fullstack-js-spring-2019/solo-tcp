const net = require('net');

// client is a socket
const server = net.createServer(client => {
  console.log('client connected');

  // client.pipe(client);

  client.on('data', data => {
    console.log(data.toString());
    client.write(`ECHO form server ${data}`);
  });
});

server.listen(5500);
