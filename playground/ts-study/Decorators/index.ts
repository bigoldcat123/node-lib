function m(...args:any) {
    console.log(args);
    
}
m.call(this,"this")
console.log(global);
