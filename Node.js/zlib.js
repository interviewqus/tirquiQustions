const zlib = require('zlib');
const gzip = zlib.createGzip();
const fs = require('fs');
const inp = fs.createReadStream('input.txt');
const out = fs.createWriteStream('input.txt.gz');
inp.pipe(gzip).pipe(out);

const unzip = zlib.createUnzip();

const inp1 = fs.createReadStream('input.txt.gz');
const out1 = fs.createWriteStream('input2.txt');

inp1.pipe(unzip).pipe(out1);