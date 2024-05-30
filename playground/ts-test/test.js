const {EventEmitter} = require('node:events')
const e = new EventEmitter()
e.on('s',(s) => {
    console.log(s);
})

e.emit('s','s')

const x = {
    name:'s'
}
Object.assign(x,e)

x.on('s',(s) => {
    console.log(s);
})
x.emit('s','s')
