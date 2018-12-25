const daos = require("../daos");

class StudentController {
  static async add(studentName) {
    try {
      if (!studentName) {
        throw "缺少必要参数";
      }
      const result = await daos.StudentDao.create({ studentName });
      return result;
    } catch (error) {
      console.error("StudentController 创建失败", error);
    }
  }
}

module.exports = StudentController;
