module.exports = {
  mysql_db: {
    database: "demo",
    username: "test",
    password: "xxxx",
    options: {
      host: "xxxxxxx",
      port: 3306,
      dialect: "mysql",
      pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000 //空闲时间
      },
      define: {
        underscored: false,
        freezeTableName: true,
        charset: "utf8mb4",
        dialectOptions: {
          collate: "utf8_general_ci"
        },
        timestamps: true
      },
      operatorsAliases: false
    }
  }
};
