const getStackTrace = function () {
    const obj = {};
    Error.captureStackTrace(obj, getStackTrace);
    return obj.stack;
};

const log = console.log;

console.log = function () {
    const stack = getStackTrace() || "";
    const matchResult = stack.match(/\(.*?\)/g) || [];
    const line = matchResult[1] || "";
    for (var i in arguments) {
    }
    //获得最后一个参数，进行判断处理，并且加上行号等信息后，输出
    if (typeof arguments[i] == "object") {
        arguments[i] = JSON.stringify(arguments[i]);
    }
    arguments[i] += "----" + line.replace("(", "").replace(")", "");
    log.apply(console, arguments);
};

console.log("object", "sdasds");
