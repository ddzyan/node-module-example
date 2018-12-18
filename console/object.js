Object.defineProperty(global, "__stack", {
  get: function() {
    const orig = Error.prepareStackTrace;
    Error.prepareStackTrace = function(_, stack) {
      return stack;
    };
    const err = new Error();
    Error.captureStackTrace(err, arguments.callee);
    const stack = err.stack;
    Error.prepareStackTrace = orig;
    return stack;
  }
});

Object.defineProperty(global, "__line", {
  get: function() {
    return __stack[1].getLineNumber();
  }
});

const log = console.log;

console.log = function() {
  for (var i in arguments) {
  }
  //获得最后一个参数，进行判断处理，并且加上行号等信息后，输出
  if (typeof arguments[i] == "object") {
    arguments[i] = JSON.stringify(arguments[i]);
  }
  arguments[i] += ` ----- ${__filename} ${__line} 行`;
  log.apply(console, arguments);
};

console.log({ error: "错误", code: 1 });
