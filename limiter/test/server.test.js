'use strict';

const assert = require('assert');
const request = require('supertest');
const app = require('../server.js');

describe('限流测试', function () {
    it('一次请求发送', async () => {
        const result = await request(app)
            .get('/users')
            .set('Accept', 'application/json')
            .expect(200);

        assert(result, '返回值错误');
        assert.equal(result.body.success, true, '状态值错误');
        return;
    })

    it('超过最大连接数测试', async () => {
        const prmiseArr = [];
        let i = 0;
        while (i < 2) {
            const result = request(app)
                .get('/users')
                .set('Accept', 'application/json')
                .expect(200);
            prmiseArr.push(result);
            i++;
        }
        const result = await Promise.all(prmiseArr);
       
        assert(result[0], '返回值错误');
        assert.equal(result[0].body.success, true, '状态值错误');

        assert(result[1], '返回值错误');
        assert.equal(result[1].body.success, false, '状态值错误');
    })
})