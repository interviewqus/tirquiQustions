const fs = require('fs');
const fileUrl = new URL('file:///./read.txt');
console.log(fileUrl)

// fs.readFile()
fs.readFile(`./${fileUrl.pathname}`, "utf8", (err, res) => {
    console.log(err);
    console.log(res)
})

let data = fs.readFileSync("./read.txt", "utf8");
console.log("\n", data)