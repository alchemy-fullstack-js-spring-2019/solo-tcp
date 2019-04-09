const fs = require('fs');

const ws = fs.createWriteStream('./spot.json', {
  flags: 'a'
});

ws.write('{');
ws.write('\n\t');
ws.write('"name": "fido",');
ws.write('\n\t');
ws.write('"age": "15",');
ws.write('\n\t');
ws.write('"weight": "25 lbs"');
ws.write('\n');
ws.write('}');

ws.end();
