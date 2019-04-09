const net = require('net');
const readLine = require('readline'); // MUST npm i -D readline

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '$ '
});
//console.log(rl);

//rl is an event emitter
//rl.prompt();

const client = net.createConnection(7890, '192.168.1.183', () => {
  //ryan's '192.168.1.238'

  console.log('I am connected');
  // client.write('Hello I am a client');
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
