import net from 'node:net';

const server = net.createServer(function (socket) {
  // socket.on('error', console.error) // this prevents the server to crash
  socket.write('Echo server\r\n');
  socket.pipe(socket);
});
net.connect(5000, '127.0.0.1').write('hello world\n');

server.listen(5000, '0.0.0.0');
