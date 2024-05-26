import express from 'express'
import {Server} from 'socket.io'

import { createServer } from 'http'
import { join } from 'node:path';
import { log } from 'console';

const app = express()
const server = createServer(app)

const io = new Server(server)

io.on('connection', (socket) => {
    log(socket.handshake.auth,socket.handshake.query)
    socket.join('1')
    socket.broadcast.to('1').emit('roommsg','hello world')
    socket.on('data',data => {
        console.log(data);
        socket.emit('data',data)
    })
    socket.on('disconnect', () => {
        console.log('user disconnected');
    })
})

app.get('/**',(req,res) => {
    log(req.url)
    res.sendFile(join(__dirname,'.' + req.url == '/' ? '/index.html' : req.url))
})

server.listen(3000,() => {
    console.log('listening on 3000');
})