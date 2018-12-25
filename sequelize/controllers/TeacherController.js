const daos = require("../daos");

class TeacherController {
  static async add(teacherName) {
    try {
      if (!teacherName) {
        throw new Error("缺少必要参数");
      }
      const result = await daos.TeacherDao.create({ teacherName });
      return result;
    } catch (error) {
      console.error(" TeacherController 操作失败", error);
    }
  }
}

module.exports = TeacherController;
