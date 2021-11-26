const redis = require("redis"),
    client = redis.createClient(6379, '127.0.0.1');

client.on("connect", function () {
    console.log("connect success");
});

client.on("error", function (err) {
    console.log("Error");
});

client.on("end", function (err) {
    console.log("end : " + err);
});


async function redisInit() {
    try {
        client.select(0);

        await redisString();
        
        await redisHash();

        client.quit();

    } catch (error) {
        console.log(error);
    }
}

function redisString() {
    return new Promise((resolve, reject) => {
        client.set("apple", "苹果", redis.print);

        client.get("apple", function (err, reply) {
            if (err) {
                reject(err);
            } else {
                console.log(reply.toString()); // Will print `OK`
                resolve();
            }
        });
    })

}

function redisHash() {
    return new Promise((resolve, reject) => {
        client.hset("fruitList", "banana", "香蕉", redis.print);

        client.hget("fruitList", "banana", function (err, reply) {
            if (err) {
                reject(err);
            } else {
                console.log(reply.toString()); // Will print `OK`
                resolve();
            }
        });
    })

}

redisInit();