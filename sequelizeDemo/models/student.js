module.exports = (sequlize, DataTypes) => {
    const student = sequlize.define('student', {
        studentId:{
            type:DataTypes.INTEGER(11),
            allowNull:false,
            commet:'学生ID'
        },
        studentName:{
            type: DataTypes.STRING(20),
            allowNull:false,
            commet:'学生名字'
        }
    });

    student.associate = function (models) {
        // 将classroomId 添加到student
        models.student.belongsTo(models.classroom, {
            onDelete: "CASCADE",
            foreignKey:'classroomId',
            targetKey:'id'
        });
    }

    return student;
}