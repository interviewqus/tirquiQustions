const fs = require('fs');
fs.mkdir("./makedir", (err) => {
    if (err) {
        console.log(err.message)
    }
    console.log("directory creat successfully")
})

try {
    fs.mkdirSync("./makedir", )
    console.log("directory create successfully")
} catch (error) {
    console.log(error.message)

}