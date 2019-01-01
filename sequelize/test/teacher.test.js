const {
  expect
} = require("chai");

const TeacherController = require("../controllers/TeacherController");

describe("TeacherController 测试", () => {
  before(function () {
    return require('../models').sequelize.sync();
  });

  it("创建老师", async () => {
    try {
      const result = await TeacherController.add("古天乐");
      expect(result).to.not.be.null;
    } catch (error) {
      expect(true).to.be.false;
    }
  });
});