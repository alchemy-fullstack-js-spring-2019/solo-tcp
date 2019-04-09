const fs = require('fs');
const rs = fs.createReadStream('./1_streams.md');

rs.on('data', data => {
  console.log('chunk', data);
});

