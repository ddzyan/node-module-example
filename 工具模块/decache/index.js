"use strict";
const heapdump = require("heapdump");
const cleanCache = require("decache");

let mod = require("./update_mod.js");
mod();

setInterval(() => {
  cleanCache("./update_mod.js");
  mod = require("./update_mod.js");
  mod();
}, 100);

function printMemory() {
  const { rss, heapUsed } = process.memoryUsage();
  console.log(
    `rss: ${(rss / 1024 / 1024).toFixed(2)}MB, heapUsed: ${(
      heapUsed /
      1024 /
      1024
    ).toFixed(2)}MB`
  );
  heapdump.writeSnapshot("./" + Date.now() + ".heapsnapshot");
}

printMemory();
setInterval(printMemory, 5000);
