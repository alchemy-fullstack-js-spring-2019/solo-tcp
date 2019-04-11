const fs = require('fs');

const ws = fs.createWriteStream('./spot.json', { flags: 'a' });

// the data event
ws.on('data', () => {

  ws.write('{ ');
  ws.write('\n\t');
  ws.write('"name": "spot" ,');
  ws.write('\n\t');
  ws.write('"age": "2" ,');
  ws.write('\n\t');
  ws.write('"breed": "lab"');
  ws.write('\n');
  ws.write(' }');
  ws.end();
});

