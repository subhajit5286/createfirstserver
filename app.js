const http=require('http')
const { type } = require('os')
const server =http.createServer((req,res)=>{
    console.log('subhajit')
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.write('My name is subhajit')
    res.end()
})
server.listen(4000)