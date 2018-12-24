module.exports = (sequlize, DataTypes) => {
    const student = sequlize.define('student', {
        studentName: DataTypes.STRING(20)
    });

    student.associate = function (models) {
        models.student.belongsTo(models.teacher, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });
    }

    return student;
}