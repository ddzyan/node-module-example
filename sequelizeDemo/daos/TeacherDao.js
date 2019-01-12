const AbstractDao = require("./AbstractDao");
const models = require("../models");

class TeahcerDao extends AbstractDao {
  constructor() {
    super(models.teacher);
  }
}

module.exports = TeahcerDao;
