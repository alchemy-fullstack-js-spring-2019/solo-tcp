const fs = require('fs');

const rs = fs.createReadStream('../2_tcp.md', {
  encode: 'utf8'
});

const ws = fs.createWriteStream('../2_tcp-copy.md');

rs.pipe(ws);
