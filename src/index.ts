import add from "./math/index";
import j from '../package.json'
import ja from '../package.json'
import {name,version} from '../package.json'
import p from 'node:child_process'
const realAdd = () => {
    console.log(add(1,2));
    console.log(j);
    console.log(name,version);   
}


export default realAdd 