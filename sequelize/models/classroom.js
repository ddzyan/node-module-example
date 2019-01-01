module.exports = (sequelize,DateTypes)=>{
    const classroom = sequelize.define('classroom',{
        classroomName:{
            type:DateTypes.STRING(20),
            allowNull:false,
            comment:'教室名称'
        },
        headTeacherId:{
            type:DateTypes.INTEGER(11),
            allowNull:false,
            commet:'班主任ID'
        },
        mathTeacherId:{
            type:DateTypes.INTEGER(11),
            allowNull:false,
            comment:'数学老师ID'
        }
    })

    classroom.associate = function(models){
        models.classroom.belongsTo(models.teacher,{
            foreignKey:'headTeacherId',
            onDelete: "CASCADE",
            targetKey:'id',
        })

        models.classroom.belongsTo(models.teacher,{
            foreignKey:'mathTeacherId',
            onDelete: "CASCADE",
            targetKey:'id',
        })
    }

    return classroom;
}