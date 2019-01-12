const daos = require("../daos");

class StudentController {
  static async create({ studentName, classroomId, studentId }) {
    try {
      if (!studentName && !classroomId && !studentId) {
        throw "缺少必要参数";
      }
      const result = await daos.StudentDao.create({
        studentName,
        classroomId,
        studentId
      });
      return result;
    } catch (error) {
      console.error("StudentController create error", error);
    }
  }

  static async batchCreation(...parm) {
    try {
      const result = await daos.StudentDao.batchCreation(parm);
      return result;
    } catch (error) {
      console.error("StudentController batchCreation error:", error);
    }
  }
}

module.exports = StudentController;
