const net = require('net');
const readLine = require('readline');

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '$ '
});

const client = net.createConnection(7890, '192.168.1.183', () => {
  console.log('I am connected');
  rl.prompt();
  rl.on('line', line => {
    client.write(line);
    rl.prompt();
  });
});
client.on('data', data => {
  console.log(`\n${data.toString()}`);
  rl.prompt();
});
