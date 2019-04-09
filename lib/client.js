const net = require('net');
const readline = require('readline');

// allows us to do terminal interaction
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> '
});

// after three way handshake occurs, the callback is invoked
const client = net.createConnection(7890, 'localhost', () => {
  console.log('I am connected.');

  rl.prompt(); // after user writes something and hits enter
  rl.on('line', line => {
    client.write(line); // it will trigger the write to the server
    rl.prompt();
  });
});

client.on('data', data => {
  console.log(`\n${data.toString()}`);
  rl.prompt();
});
