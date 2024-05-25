import net from 'node:net'

const client = net.createConnection({
    port: 3000,
    host:'localhost'
})

client.on('data',(e) => {
    console.log(e.toString());
})
client.on('close',() => {
    console.log('close');
    
})
client.write('hello world\n')