const fs = require('fs')

fs.unlink("./file", (err) => { console.log("Err", err) })


try {
    let val = fs.unlinkSync("./file1.txt")
    console.log(val)
} catch (e) { console.log(e) }