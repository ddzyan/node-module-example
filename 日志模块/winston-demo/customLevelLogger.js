const winston = require('winston');

const myCustomLevels = {
    levels: {
        foo: 0,
        bar: 1,
        baz: 2,
        foobar: 3
    },
    colors: {
        foo: 'blue',
        bar: 'green',
        baz: 'yellow',
        foobar: 'red'
    }
};

const customLevelLogger = winston.createLogger({
    levels: myCustomLevels.levels
});

customLevelLogger.foobar('some foobar level-ed message');