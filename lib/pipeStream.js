const fs = require('fs');

const rs = fs.createReadStream('./1_streams.md', {
  encoding: 'utf8'
});

const ws = fs.createWriteStream('./1_streams-copy2.md', {
  flags: 'a'
});

rs.pipe(ws);
// by default, stream.end() is called on the destination of write
