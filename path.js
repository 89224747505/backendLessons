const path = require('path');

// console.log(path.join('first','second','third'));
//
// console.log(path.join(__dirname,'first','second','third'));
//
// console.log(path.join(__filename,'first','second','third'));
//
// console.log(path.join(__dirname,'..'));
//
// console.log(path.join(__dirname,'../..'));
// path.resolve(__dirname,'../..') то же самое что и джоин но его лучше не применять бывают ошибки с ним


// const fullpath = path.join(__dirname);
//
// console.log(fullpath);
// console.log(path.parse(fullpath));
// console.log(path.sep);
// console.log('Absolute path:', path.isAbsolute(fullpath));
// console.log('Absolute path:', path.basename(fullpath));
// console.log('Absolute path:', path.extname(fullpath));

const siteURL = 'https://localhost:8000/users?id=569432';

const url = new URL(siteURL);

console.log(url);