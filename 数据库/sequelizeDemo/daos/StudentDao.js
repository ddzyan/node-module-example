const AbstractDao = require("./AbstractDao");
const models = require("../models");

class StudentDao extends AbstractDao{
    constructor(){
        super(models.student);
    }
}

module.exports = StudentDao;