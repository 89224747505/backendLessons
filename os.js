const os = require('os');
const cluster = require('cluster');
const crypto = require('crypto');

// console.log(os.platform());
// console.log(os.arch());
// console.log(os.cpus());
// console.log(os.cpus().length);

// const cpus = os.cpus()
//
// for (let i = 0; i < cpus.length-1; i++) {
//     const CPUcore = cpus[i];
//     console.log(`Запущен процесс - ${i} - ${process.pid}`);
// }
//
// console.log(process.pid);
//
// while (true) {
//
// }


if (cluster.isPrimary) {
    for (let i = 0; i < os.cpus().length - 1; i++) {cluster.fork();}

    cluster.on('exit', (worker)=>{
        console.log(`Процесс ${worker.process.pid} умер`);
        cluster.fork();
    })
}else console.log(`Процесс запущен - ${process.pid}`);

    setInterval((worker)=>{
        crypto.pbkdf2('Hallo world I am Ivan Zyryanov', '5', 1000000, 8, 'sha512', (err, derivedKey) => {
            console.log(`Процесс ${process.pid} - ${derivedKey.toString('hex')}`)
        });
}, 0)

