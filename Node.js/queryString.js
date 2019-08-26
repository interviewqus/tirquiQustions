querystring = require('querystring');
const obj1 = querystring.parse('name=sonoo&company=javatpoint$&');
console.log(obj1);
const qs1 = querystring.stringify({ name: 'sonoo', company: 'javatpoint&name=saif' });
console.log(qs1);