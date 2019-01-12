const daos = require("../daos");

class TeacherController {
  static async add(teacherName) {
    try {
      if (!teacherName && teacherName instanceof 'string') {
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
    let count = 0;
    let rows = [];
    const result = await daos.TeacherDao.batchCreation(parm);
    if (result.length > 0) {
      count = result.length;
      for(const item of result){
        rows.push(item.dataValues);
      }
    }
    return {
      count,
      rows
    };
  }
}

module.exports = TeacherController;