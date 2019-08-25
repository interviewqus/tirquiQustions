const fs = require('fs');

// let data = fs.open(Buffer.from('./readfile.txt'), 'r', (err, fd) => {
//     console.log("Error: ", err)
//     console.log("Fd: ", fd)
//     if (err) throw err;
//     fs.close(fd, (err) => {
//         console.log("close Fd :", fd)
//         console.log("Close Error : ", err)

//         if (err) throw err;
//     });
// });

let buf = new Buffer(1024);
console.log("Buffer data", buf.toString())

console.log("Going to open an existing file");
fs.open('./readfile1.txt', 'w+', function(err, fd) {
    if (err) {
        return console.error(err);
    }
    console.log("File opened successfully!");
    console.log("Going to read the file");
    // Truncate the opened file.
    // fs.ftruncate(fd, 10, function(err) {
    //         if (err) {
    //             console.log(err);
    //         }
    //     })

    // fs.read(fd, buf, 0, buf.length, 0, function(err, bytes, data) {
    //     if (err) {
    //         debugger
    //         console.log(err);
    //     }
    //     console.log(bytes + " bytes read");

    //     // Print only read bytes to avoid junk.
    //     if (bytes > 0) {
    //         console.log(data.slice(0, bytes).toString()); //using this only  only  read only usable buffer bytes
    //         console.log("Buffer data", data) // this method read all the  buffer byte usable and unusable
    //     }
    //     fs.close(fd, function(err) {
    //         if (err) {
    //             console.log(err);
    //         }
    //         console.log("File closed successfully. Fd:", fd);
    //     });
    // });
    let data = fs.readSync(fd, buf, 0, buf.length, 0);
    console.log("Using Sync", data.toString())
        // fs.write()
});