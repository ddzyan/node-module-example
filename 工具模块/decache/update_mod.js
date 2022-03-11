"use strict";

const array = new Array(10e5).fill("*");
let count = 0;

module.exports = () => {
  console.log("update_mod", ++count, array.length);
};
