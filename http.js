const http = require('http');

const PORT = process.env.PORT || 5000;

const server = http.createServer((req,res) => {
    //res.writeHead(200, {'Content-type':'text/html;charset=utf-8'})
    // res.end('<div style="color:red;font-size:30px;">Привет СЕРВАЧОК</div>')
    res.writeHead(200,{'Content-type':'application/json'});
    if (req.url === "/users") {
        return res.end(JSON.stringify([
            {id:1, name:'Ivan', role: 'husband'},
            {id:2, name:'Ivan', role: 'husband'},
            {id:3, name:'Ivan', role: 'husband'},
            {id:4, name:'Ivan', role: 'husband'}
        ]));
    }
    if (req.url === "/posts") {
        return res.end("You can add your POST");
    }


})

server.listen(PORT, ()=> {
    console.log('Server is ready. Port number',PORT)
})