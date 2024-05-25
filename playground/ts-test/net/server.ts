import net from 'node:net'

net.createServer(socket => {
    socket.on('data',data => {
        console.log(data.toString());
    })
    socket.end('hello world\n')
}).listen(3000,() => {
    console.log('listening on 3000');
})