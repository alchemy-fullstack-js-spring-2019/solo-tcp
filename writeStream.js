const fs = require('fs');

const ws = fs.createWriteStream('./spot.json', {
  flags: 'a',
});

// tell us what we are writing (don't leave any unfilled... or they will not write)
ws.write('{');
ws.write('\n\t');
ws.write('name: "spot"');
ws.write('\n\t');
ws.write('age: 155');
ws.write('\n\t');
ws.write('spot...');
ws.write('\n\t');
ws.write('here he is'); 
ws.write('\n');
ws.write('}');


// lets us know we are done writing
ws.end();
