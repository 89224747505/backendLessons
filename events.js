const Emitter = require('events');

const emitter = new Emitter();
//
// emitter.on('message', (data1,data2) => {
//     console.log(data1);
//     console.log(data2);
// })

emitter.once('message', (data1,data2) => {
    console.log(data1);
    console.log(data2);
})

const MESSAGE = process.env.message || '';

emitter.emit('message', MESSAGE, 123);
emitter.emit('message', MESSAGE, 123);
emitter.emit('message', MESSAGE, 123);
emitter.emit('message', MESSAGE, 123);

emitter.removeListener('message', )

if (MESSAGE) {
    emitter.emit('message', MESSAGE, 123)
}else{
    emitter.emit('message', 'No message', 'let new message')
}