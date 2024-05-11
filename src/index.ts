import add from "./math/index";
import j from '../package.json'
import ja from '../package.json'
import {name,version} from '../package.json'
const realAdd = () => {
    console.log(add(1,2));
    console.log(j);
    console.log(name,version);
    
}
realAdd()
export default realAdd 