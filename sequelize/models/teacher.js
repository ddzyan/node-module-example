module.exports = (sequlize, DataTypes) => {
    const teacher = sequlize.define('teacher', {
        teacherName: {
            type:DataTypes.STRING(20),
            allowNull:false
        }
    });
    return teacher;
};