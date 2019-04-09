const net = require('net');

//created every time a new person connects to the server aka socket
const server = net.createServer(client => {
  console.log('client connected!!');
  
  client.on('data', data => {
    client.write(`ECHO FROM SERVER: ${data}`);
  });
});

server.listen(9990);
