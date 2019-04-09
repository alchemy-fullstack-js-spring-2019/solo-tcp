const fs = require('fs');

const rs = fs.createReadStream('./1_streams.md', {
  encoding: 'utf8'
});
const ws = fs.createWriteStream('./1_streams-copy.md', {
  flags: 'a'
});

rs.on('data', data => {
  ws.write(data);
});
