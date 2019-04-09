const fs = require('fs');

const ws = fs.createWriteStream('./spot.json', { flags: 'a' });

const rs = fs.createReadStream('./1_streams.md',);


// the data event
rs.once('data', () => {

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

