try {
    fs.accessSync('etc/passwd', fs.constants.R_OK | fs.constants.W_OK);
    console.log('can read/write');
} catch (err) {
    console.error('no access!');
}
console.log("Event", eventType)
if (Filename) {
    console.log("FileName : ", Filename)
        // Prints: <Buffer ...>
}
});
console.log(data)