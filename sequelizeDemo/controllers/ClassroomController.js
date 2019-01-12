const daos = require("../daos");

class ClassroomController{
    static async createClassroom(parm){
        try {
            const {classroomName,headTeacherId,mathTeacherId} = parm;
            if(classroomName && headTeacherId && mathTeacherId ){
                throw new Error('缺少必要参数');
            }
            const result = await daos.ClassroomDao.create(parm);
            return result;
        } catch (error) {
            throw error;
        }
    }
}