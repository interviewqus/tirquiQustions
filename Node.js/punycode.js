punycode = require('punycode');
console.log(punycode.decode('saif-ali'));
console.log(punycode.encode('☃-⌘'));
console.log(punycode.toASCII('safi-ali.com'));
console.log(punycode.toUnicode('xn--maana-pta.com'));