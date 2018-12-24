module.exports = (sequlize, DataTypes) => {
    const teacher = sequlize.define('teacher', {
        teacherName: DataTypes.STRING(20)
    });

    teacher.associate = function (models) {
        models.teacher.hasMany(models.student);
    }

    return teacher;
}