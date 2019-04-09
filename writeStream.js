const fs = require('fs');
const ws = fs.createWriteStream('./spot.json', {
  flags: 'a',
});

ws.write('{');
ws.write('\n\t');
ws.write('"name": "spot",');
ws.write('\n\t');
ws.write('"age": 155, ');
ws.write('\n\t');
ws.write('"description": ');
ws.write('\n\t');
ws.write('"she is a beautiful doge"');
ws.write('\n'); 
ws.write('}');


ws.end();
