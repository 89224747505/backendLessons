
const fs = require('fs');
const path = require('path');


// console.log(path.resolve(__dirname,'dir'));

// fs.mkdirSync(path.resolve(__dirname,'dir'));

// fs.mkdirSync(path.resolve(__dirname,'dir','dir2','dir3'), {recursive:true});



// console.log('Начало')
// fs.mkdir(path.resolve(__dirname,'dir'), (err)=>{
//     if (err) {
//         console.log(err);
//         return;
//     }
//         console.log('Код выполнен!!! Функция сработала асинхронно!')
// });
// console.log('Конец')


// fs.rmdir(path.resolve(__dirname,'dir'),(err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('Папка удалена');
// })

// fs.writeFile(path.resolve(__dirname,'test.js'),'wqef wfwesdfsdff wffw', (err)=>{
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('File is build');
// })


const writeFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, data, (err) => {
            if (err) {
                return reject(err.message)
            }
            resolve()
        })
    })
}
const appendFileAsync = async (path,data) => {
    return new Promise((resolve, reject) => {
        fs.appendFile(path, data, (err) => {
            if (err) {
                return reject(err.message)
            }
            resolve()
        })
    })
}
const readFileAsync = async (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, {encoding:'utf-8'}, (err, data ) => {
            if (err) {
                return reject(err.message)
            }
            resolve(data)
        })
    })
};

const removeFileAsync = async (path) => {
    return new Promise((resolve, reject) => {
        fs.rm(path, (err) => {
            if (err) {
                return reject(err.message)
            }
            resolve()
        })
    })
};

// writeFileAsync(path.resolve(__dirname,'text.js'), 'Hallo world')
//     .then(()=>appendFileAsync(path.resolve(__dirname,'text.js'),'123'))
//     .then(()=>appendFileAsync(path.resolve(__dirname,'text.js'),'456'))
//     .then(()=>appendFileAsync(path.resolve(__dirname,'text.js'),'789'))
//     .then(()=>readFileAsync(path.resolve(__dirname,'text.js')))
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// removeFileAsync(path.resolve(__dirname,'text.js'))
//     .then(()=>console.log('File was deleted'))
//     .catch(err => console.log(err));


// const text = process.env.TEXT || '';
// console.log(text);
// writeFileAsync(path.resolve(__dirname,'text.js'), text)
//     .then(()=>readFileAsync(path.resolve(__dirname,'text.js')))
//     .then(data => data.split(' ').length)
//     .then(count=>writeFileAsync(path.resolve(__dirname,'count.txt'),`Количество слов: ${count}`))
//     .then(()=>removeFileAsync(path.resolve(__dirname,'text.js')))
//     .catch(err => console.log(err));

