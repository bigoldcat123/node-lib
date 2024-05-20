import {program} from 'commander'
import * as readline from 'readline';
import { fork,exec,spawn, execSync } from 'child_process';
let e = false
let r = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let unlock:Function
const lock = () => {
    return new Promise(resolve => {
        unlock = resolve
    })
}
const res = execSync('node -v')

console.log(res.toString().trim());

async function main () {
    while(true) {
        r.question('请输入:', (answer) => {
            console.log(answer);
            fork(answer,{stdio: 'inherit'})
            
            unlock()
        })
        await lock()
    }
}
main ()

