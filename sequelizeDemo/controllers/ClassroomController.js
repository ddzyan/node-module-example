const daos = require("../daos");

class ClassroomController {
  static async create({ classroomName, headTeacherId, mathTeacherId }) {
    try {
      if (!(classroomName && headTeacherId && mathTeacherId)) {
        throw new Error("缺少必要参数");
      }
      const result = await daos.ClassroomDao.create({
        classroomName,
        headTeacherId,
        mathTeacherId
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}
module.exports = ClassroomController;
