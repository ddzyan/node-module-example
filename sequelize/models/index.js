const Sequelize = require('sequelize');
const fs = require('fs');
const path = require("path");
const basename = path.basename(__filename);
const sequelize = new Sequelize("demo", "test", "w6ecb0qljc", {
    host: "111.231.215.55",
    port: 3306,
    dialect: "mysql",
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000 //空闲时间
    }
});

const db = [];

fs.readdirSync(__dirname).filter(file => {
    return (file.indexOf(".") !== 0 && (file !== basename) && (file.slice(-3) === '.js'));
}).forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
});

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
})

/* sequelize.authenticate().then(() => {
    console.log("connect success");
}).catch(error => {
    console.log("connect error", error);
}) */

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;