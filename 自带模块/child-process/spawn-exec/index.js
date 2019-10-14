const { exec, spawn } = require("child_process");

const child1 = spawn("ls", ["-l"]);
const child2 = spawn("wc", ["-l"]);

child1.stdout.pipe(child2.stdin);
child2.stdout.pipe(process.stdout);
