const crypto = require('crypto');
const secret = 'abcdefg';
const hash = crypto.createHmac('sha256', secret)
    .update('Welcome to JavaTpoint')
    .digest('hex');
console.log(hash);


// const crypto = require('crypto');  
const cipher = crypto.createCipher('aes192', 'a password');
var encrypted = cipher.update('Hello JavaTpoint', 'utf8', 'hex');
encrypted += cipher.final('hex');
console.log(encrypted);

// const crypto = require('crypto');  
const decipher = crypto.createDecipher('aes192', 'a password');
var encrypted = '4ce3b761d58398aed30d5af898a0656a3174d9c7d7502e781e83cf6b9fb836d5';
var decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log(decrypted);