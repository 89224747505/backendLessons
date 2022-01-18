const crypto = require('crypto');

const start = Date.now();

crypto.pbkdf2('vanya122322323', '10', 1000000, 32, 'sha512', (err, derivedKey) => {
    console.log('0 end', Date.now() - start);
    console.log(derivedKey)
});

crypto.pbkdf2('vanya122322323', '10', 1000000, 32, 'sha512', (err, derivedKey) => {
    console.log('1 end', Date.now() - start);
    console.log(derivedKey)
});

crypto.pbkdf2('vanya122322323', '10', 1000000, 32, 'sha512', (err, derivedKey) => {
    console.log('2 end', Date.now() - start);
    console.log(derivedKey)
});
crypto.pbkdf2('vanya122322323', '10', 1000000, 32, 'sha512', (err, derivedKey) => {
    console.log('3 end', Date.now() - start);
    console.log(derivedKey)
});
crypto.pbkdf2('vanya122322323', '10', 1000000, 32, 'sha512', (err, derivedKey) => {
    console.log('4 end', Date.now() - start);
    console.log(derivedKey)
});
crypto.pbkdf2('vanya122322323', '10', 1000000, 32, 'sha512', (err, derivedKey) => {
    console.log('5 end', Date.now() - start);
    console.log(derivedKey)
});
console.log(start);