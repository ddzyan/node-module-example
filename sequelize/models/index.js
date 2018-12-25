const Sequelize = require("sequelize");
const fs = require("fs");
const path = require("path");
const basename = path.basename(__filename);

const { mysql_db } = require("../config");
const sequelize = new Sequelize(
  mysql_db.database,
  mysql_db.username,
  mysql_db.password,
  mysql_db.options,
  mysql_db.define,
  mysql_db.operatorsAliases
);

const db = [];

fs.readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach(file => {
    const model = sequelize["import"](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

/* sequelize.authenticate().then(() => {
    console.log("connect success");
}).catch(error => {
    console.log("connect error", error);
}) */

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
