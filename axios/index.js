const axios = require('axios');

class HttpClient {
    constructor(url, port) {
        this.instan = axios.create({
            baseURL: `${url}:${port}/`,
            timeout: 1000,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    async postHttp(url, params) {
        try {
            return await this.instan.post(url, params);
        } catch (error) {
            throw error;
        }
    }

    async getHttp(url, params) {
        try {
            return this.instance.get(url, params);
        } catch (error) {
            throw error;
        }
    }

    /**
     * concurrent
     * 并发
     * @param  {...any} parm 
     */
    async concurrent(...parm) {
        try {
            const abc = parm.map((currentValue) => {
                return currentValue()
            });

            axios.all(abc).then(axios.spread(function (acct, perms) {
                console.log(acct);
                console.log(perms);
            }));
        } catch (error) {
            console.log(error);
        }
    }
}

(async function () {
    try {
        const httpClient = new HttpClient('www.baidu..com', 3000);
        const result = await httpClient.postHttp('watchonly/latestblock', {
            currencyName: 'EOS',
        });
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}())