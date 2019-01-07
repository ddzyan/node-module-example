'use strict';

const assert = require('assert');

describe('Array', function(){
    let ary;
    beforeEach(() => {
        ary = [1,2,3];
    });
    describe('#indexOf()', () => {
        it('should return index when the value is present', () => {
            const zero = 0, two = 2;
            assert(ary.indexOf(zero) === two);
        });
        it('should return -1 when the value is not present', () => {
            const minusOne = -1, two = 2;
            assert.ok(ary.indexOf(two) === minusOne, 'THIS IS AN ASSERTION MESSAGE');
        });
    });
});

describe('various types', () => {
    let types;
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    beforeEach(() => {
        types = [
            'string', 98.6, true, false, null, undefined,
            ['nested', 'array'],
            {object: true},
            NaN, Infinity,
            /^not/,
            new Person('alice', 3)
        ];
    });
    it('demo', () => {
        const index = types.length -1,
            bob = new Person('bob', 5);
        assert(types[index].name === bob.name);
    });
});