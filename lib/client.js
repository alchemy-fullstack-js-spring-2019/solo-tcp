const net = require('net');

const client = net.createConnection(1176, '192.168.1.76', () => {
  console.log('I am connected');
  client.write('hello I am a client');
});
