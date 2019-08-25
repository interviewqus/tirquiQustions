const fs = require('fs');
const buf = /* new Buffer("this is buffer data that inserted insdie this file")*/ "this is  the data  file kong  data is writen"
    // let fd = fs.openSync("./file3.txt", "a+", );
    // console.log(fd);

// let data = fs.writeSync(fd, buf, 0, buf.length, 0);
// console.log(data)

fs.open("./file4.txt", "w+", (err, fd) => {
    if (err) console.log(err);
    console.log(fd);
    fs.write(fd, buf, 0, buf.length, (err, length, buffer) => {
        console.log(err);
        console.log(length)
        console.log(buffer)
    })

})