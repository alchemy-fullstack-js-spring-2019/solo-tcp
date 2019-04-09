const fs = require('fs');
const rs = fs.createReadStream('./new.file');
const ws = fs.createWriteStream('./newCopied.file');