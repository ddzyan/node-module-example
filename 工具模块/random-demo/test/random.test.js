const assert = require("assert");
const random = require("../src/random");

describe("random 测试", function() {
  it("获得随机字符串", function() {
    const result = random.getRandomString();
    assert(result);
    assert(result.length === 15, "字符串长度错误");
  });

  it("获得随机数字", function() {
    const result = random.getRandomString(12, "numeric");
    assert(result);
    assert.equal(result.length, 12, "字符串长度错误");
  });
});
