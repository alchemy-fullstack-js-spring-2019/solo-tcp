const net = require('net');


//created every time a new person connects to the server aka socket
const server = net.createServer(client => {
  console.log('client connected!!');
  client.on('data', data => {
    console.log(data.toString());
  });
});

server.listen(9999);
