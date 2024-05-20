import add from "./math/index";
import j from '../package.json'
import ja from '../package.json'
import {name,version} from '../package.json'
import stu from './enrollment/index'
const realAdd = () => {
    console.log(add(1,2));
    console.log(j);
    console.log(name,version);   
}
realAdd()

const whoAmiI = ()=> {
    return stu()
}
export default {realAdd,add,whoAmiI} 
