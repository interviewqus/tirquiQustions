const yargs = require('yargs');

const argv = yargs.argv;
const command = process.argv;

function add(title, body) {
    console.log("title1: ", title, "\n body1 :", body)
}

if (command[2] == "Add") {

    add(argv.title, argv.body)

}

console.log("command:", argv);
console.log("\nyargs title\n")
console.log(argv.title)
console.log("\nyargs body\n")
console.log(argv.body)
console.log("\nprocess.argv body\n")
console.log(command)