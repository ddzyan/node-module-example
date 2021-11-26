module.exports = (sequlize, DataTypes) => {
  const teacher = sequlize.define("teacher", {
    id: {
      type: DateTypes.INTEGER(11).UNSIGNED,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
      comment: "id"
    },
    teacherName: {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "名字"
    }
  });
  return teacher;
};
