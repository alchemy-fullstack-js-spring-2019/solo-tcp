const fs = require('fs');

const ws = fs.createWriteStream('./spot.json', {
  flags: 'a' //appends data to the file, doesn't overwrite
});

// allows us to write data to this file
// can have as many writes as you want
ws.write('{');
ws.write('\n\t'); // puts a new line and tabs it
ws.write('"name": "fido",');
ws.write('\n\t');
ws.write('"age": "15",');
ws.write('\n\t');
ws.write('"weight": "25 lbs"');
ws.write('\n');
ws.write('}');


// lets stream know that we are done writing
ws.end();
