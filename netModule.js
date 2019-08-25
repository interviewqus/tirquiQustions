const net = require('net');

var server = net.createServer((socket) => {
    socket.end('goodbye\n');
}).on('error', (err) => {
    // handle errors here  
    throw err;
});
// grab a random port.  
server.listen(2000, () => {
    address = server.address();
    console.log('opened server on %j', address);
});

const client = net.connect({ port: 2000 }, () => { //use same port of server  
    console.log('connected to server!');
    client.write('world!\r\n');
});
client.on('data', (data) => {
    console.log(data.toString());
    client.end();
});
client.on('end', () => {
    console.log('disconnected from server');
});