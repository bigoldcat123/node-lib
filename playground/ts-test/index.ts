// import {program} from 'commander'
// import * as readline from 'readline';
// import { fork,exec,spawn, execSync } from 'child_process';
// let e = false
// let r = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })
// let unlock:Function
// const lock = () => {
//     return new Promise(resolve => {
//         unlock = resolve
//     })
// }
// const res = execSync('node -v')

// console.log(res.toString().trim());

// async function main () {
//     while(true) {
//         r.question('请输入:', (answer) => {
//             console.log(answer);
//             fork(answer,{stdio: 'inherit'})

//             unlock()
//         })
//         await lock()
//     }
// }
// main ()

// import { log } from 'node:console';
// import crypto from 'node:crypto'


// const r = crypto.generateKeyPairSync('rsa', {
//     modulusLength: 2048
// })

// console.log(r.publicKey.export({"format":'pem',"type":'pkcs1'}));

// const rr = crypto.publicEncrypt(r.publicKey, Buffer.from('he啊啊啊dasd阿斯顿撒大llo'))
// console.log(rr);

// const x = crypto.privateDecrypt(r.privateKey, rr)
// console.log(x.toString());

import { list } from '@vercel/blob';
import x from 'dotenv'
x.config()

console.log(process.env);
async function name() {
    const {blobs} = await list({
        limit: 2
      });
      const { url } = blobs[0];
      console.log(url);
      const { url: captionsUrl } = blobs[1];
      console.log( captionsUrl);
      
}
name()