const t = require("tcomb");

function sum(a, b) {
  t.Number(a);
  t.Number(b);
  return a + b;
}

sum(1, "s"); // throws '[tcomb] Invalid value "s" supplied to Number'
