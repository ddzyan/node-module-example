process.on("message", function(m) {
  console.log("client on message", m);
});

process.send({ foo: "bar" });
