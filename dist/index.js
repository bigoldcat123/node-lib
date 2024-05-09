'use strict';

function add(x, y) {
    return x + y;
}

const realAdd = () => {
    console.log(add(1, 2));
};

module.exports = realAdd;
