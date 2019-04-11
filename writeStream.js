const fs = require('fs');
const ws = fs.createWriteStream('./spot.json', {
  flags:'a'
});

ws.write('{');
ws.write('\n\t');
ws.write('"name": "stitch",'); 
ws.write('\n\t');
ws.write('"breed": "mutt",');
ws.write('\n\t');
ws.write('"size": "small"');
ws.write('\n\t');
ws.write('}');

ws.end();
