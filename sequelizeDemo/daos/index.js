const fs = require("fs");

let db = null;
module.exports = (function(params) {
  if (!db) {
    db ={};
    fs.readdirSync(__dirname)
      .filter(file => {
        return (
          file.indexOf(".") !== 0 &&
          file !== "index.js" &&
          file !== "AbstractDao.js"
        );
      })
      .forEach(file => {
        const fileName = file.substring(0, file.indexOf("."));
        const ClassFile = require(`./${file}`);
        db[fileName] = new ClassFile();
      });
  }

  return db;
})();
