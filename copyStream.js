const fs = require('fs');

const rs = fs.createReadStream('./1_streams.md', {
  encoding: 'utf8', 
  highWaterMark: 64 * 1028
});

const ws = fs.createWriteStream('./copy.md');

rs.on('data', chunk => {
  ws.write(chunk);
});

rs.on('end', () => {
  ws.end();
});
