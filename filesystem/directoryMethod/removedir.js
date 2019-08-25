var fs = require("fs");

console.log("Going to delete directory /makeddir");
fs.rmdir("./makeddir", function(err) {
    if (err) {
        return console.error(err);
    }
    console.log("Going to read directory /Makedir");

    fs.readdir("/makeddir/", function(err, files) {
        if (err) {
            return console.error(err);
        }
        files.forEach(function(file) {
            console.log(file);
        });
    });
});


fs.rmdirSync("./makdedir1")