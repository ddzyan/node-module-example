const { expect } = require("chai");

const TeacherController = require("../controllers/TeacherController");

describe("TeacherController 测试", () => {
  it("创建老师", async () => {
    try {
      const result = await TeacherController.add("古天乐");
      expect(result).to.not.be.null;
    } catch (error) {
      expect(`创建失败 ${error}`).to.be.false;
    }
  });
});
