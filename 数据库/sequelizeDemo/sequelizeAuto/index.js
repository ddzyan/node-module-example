const SequelizeAuto = require("sequelize-auto");
const { mysql_db } = require("../config");
const auto = new SequelizeAuto(
  mysql_db.database,
  mysql_db.username,
  mysql_db.password,
  mysql_db.options,
  mysql_db.define,
  mysql_db.operatorsAliases
);

auto.run(function(err) {
  if (err) throw err;

  console.log(auto.tables); // table list
  console.log(auto.foreignKeys); // foreign key list
});
