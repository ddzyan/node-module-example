module.exports = (sequelize,DataTypes)=>{
    const parent = sequelize.define('parent',{
        parentName:{
            type:DataTypes.STRING(20),
            allowNull:false,
            comment:'家长名字'
        },
        gender:{
            type:DataTypes.INTEGER(1),
            comment:'性别',
            allowNull:false
        }
    });
    
    parent.associate = function(models){
        models.parent.hasOne(models.student,{
            onDelete: "CASCADE",
            foreignKey:'parentId',
            sourceKey:'id' 
        })
    }

    return parent;
}