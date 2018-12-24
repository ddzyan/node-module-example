const models = require('./models');

models.sequelize.sync().then(function () {
    console.log("创建成功");
}).catch(error => {
    console.log("创建失败", error);
});