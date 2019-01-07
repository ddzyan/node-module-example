const assert = require('assert');

const TeacherController = require("../controllers/TeacherController");

describe("初始化数据测试", () => {
  let headTeacherId, mathTeacherId;

  before(function () {
    return require('../models').sequelize.sync();
  });

  it("创建2个老师", async () => {
    try {
      const a = 1;
      const b = 1;
      const result = await TeacherController.batchCreation({
        teacherName: "张学友"
      }, {
        teacherName: "古天乐"
      });
      assert(a + b > 100);
    } catch (error) {
      assert(false);
    }
  });
});