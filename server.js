const net = require('net');
const server = net.createServer(client => {
  console.log('client connected!');
  
  client.on('data', data => {
    console.log(data.toString());
  });
});

server.listen(7890);
// every client is a socket (node js calls it a socket)
// sockets are when clients request data from you

