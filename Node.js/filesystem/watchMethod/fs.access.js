const file = 'package.json';

// Check if the file exists in the current directory.
fs.access("./tmp/file.txt", fs.constants.F_OK, (err) => {
    console.log(`${file} ${err ? 'does not exist' : 'exists'}`);
});

// Check if the file is readable.
fs.access(file, fs.constants.R_OK, (err) => {
    console.log(`${file} ${err ? 'is not readable' : 'is readable'}`);
});

// Check if the file is writable.
fs.access(file, fs.constants.W_OK, (err) => {
    console.log(`${file} ${err ? 'is not writable' : 'is writable'}`);
});

// Check if the file exists in the current directory, and if it is writable.
fs.access(file, fs.constants.F_OK | fs.constants.W_OK, (err) => {
    if (err) {
        console.error(
            `${file} ${err.code === 'ENOENT' ? 'does not exist' : 'is read-only'}`);
    } else {
        console.log(`${file} exists, and it is writable`);
    }
});



try {
    fs.accessSync('etc/passwd', fs.constants.R_OK | fs.constants.W_OK);
    console.log('can read/write');
} catch (err) {
    console.error('no access!');
}