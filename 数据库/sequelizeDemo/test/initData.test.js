const assert = require("assert");

const {
  TeacherController,
  ClassroomController,
  StudentController
} = require("../controllers");
const { getRandomString } = require("../tools/comm");

describe("初始化数据测试", () => {
  let headTeacherId, mathTeacherId, classroomId;
  const classroomName = "测试一班";

  before(function() {
    return require("../models").sequelize.sync();
  });

  after(function() {
    
  });

  it("创建2个老师", async () => {
    try {
      const result = await TeacherController.batchCreation(
        {
          teacherName: "张学友"
        },
        {
          teacherName: "古天乐"
        }
      );

      assert(result, "老师创建失败");
      assert(result.count > 1, "创建数量错误");
      headTeacherId = result.rows[0].id;
      mathTeacherId = result.rows[1].id;
    } catch (error) {
      assert(false, error);
    }
  });

  it("创建班级", async () => {
    try {
      const result = await ClassroomController.create({
        classroomName,
        headTeacherId,
        mathTeacherId
      });

      assert(result, "班级创建失败");
      assert(result.id, "获得班级ID失败");
      classroomId = result.id;
    } catch (error) {
      assert(false, error);
    }
  });

  it("创建学生", async () => {
    try {
      const studentId = getRandomString();
      const result = await StudentController.create({
        classroomId,
        studentName: "张三",
        studentId
      });

      assert(result, "学生创建失败");
      assert(result.id, "获得学生ID失败");
    } catch (error) {
      assert(false, error);
    }
  });
});
