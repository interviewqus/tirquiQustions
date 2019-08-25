const fs = require("fs");

fs.appendFile("./file.txt", "Data to insert", (err) => {

    console.log(err)

})


fs.appendFileSync("./file1.txt", "data", "ascii")

fs.writeFile("./file2.txt", "data1212 ", "utf8", (err) => {
    console.log(err)
})