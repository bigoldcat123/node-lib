// const x= require('czh-node-liv')
// console.log(x);
import http from 'node:http'

http.createServer((request,response) => {
    request.on('data',data => {
        console.log(data.toString());
    })
    response.end('hello world\n')
}).listen(3000)