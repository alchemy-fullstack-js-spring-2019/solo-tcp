const net = require('net');

const client = net.createConnection(7890, 'localhost', () => {
  console.log('I am connected.');
  client.write('Hello, I am a client.');
});

