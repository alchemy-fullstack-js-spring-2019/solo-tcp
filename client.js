const net = require('net');

const client = net.createConnection(9999, 'localHost', () => {
  console.log('I am connected');
  client.write('hello I am a client');
});
