const daos = require("../daos");

class TeacherController {
  static async create(teacherName) {
    try {
      if (!teacherName && teacherName instanceof "string") {
        throw new Error("缺少必要参数");
      }
      const result = await daos.TeacherDao.create({
        teacherName
      });
      return result;
    } catch (error) {
      console.error(" TeacherController 操作失败", error);
    }
  }

  static async batchCreation(...parm) {
    const result = await daos.TeacherDao.batchCreation(parm);
    return result;
  }
}

module.exports = TeacherController;
