"use strict";
function m(...args) {
    console.log(args);
}
m.call(this, "this");
console.log(global);
