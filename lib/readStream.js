const fs = require('fs');

const rs = fs.createReadStream('./1_streams.md');

//data event
rs.on('data', data => {
  console.log(data);
});

