const fs = require('fs');

fs.rename("./newfile.txt", "newfile.txt", (err) => {

    console.log("\nRename File Error :", err)

})


fs.stat("./newfile.txt", (err, Status) => {

    console.log("\nStat Error:  ", err);
    console.log("\nStatus :  ", JSON.stringify(Status))

})

try {
    fs.renameSync("newfile.txt", "newfile.txt")
} catch (error) {
    Console.log("renameSync Error : ", error)
}

let status = fs.statSync('./newfile')
console.log(status);

// Right way to use the this method
fs.rename('/tmp/hello', '/tmp/world', (err) => {
    if (err) throw err;
    fs.stat('/tmp/world', (err, stats) => {
        if (err) throw err;
        console.log(`stats: ${JSON.stringify(stats)}`);
    });
});