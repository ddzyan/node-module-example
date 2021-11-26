module.exports = (sequlize, DataTypes) => {
  const student = sequlize.define("student", {
    id: {
      type: DateTypes.INTEGER(11).UNSIGNED,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
      comment: "id"
    },
    studentId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      commet: "学生ID"
    },
    studentName: {
      type: DataTypes.STRING(20),
      allowNull: false,
      commet: "学生名字"
    }
  });

  student.associate = function(models) {
    // 将classroomId 添加到student
    models.student.belongsTo(models.classroom, {
      onDelete: "CASCADE",
      foreignKey: "classroomId",
      targetKey: "id"
    });
  };

  return student;
};
