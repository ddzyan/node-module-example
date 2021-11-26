const AbstractDao = require("./AbstractDao");
const models = require("../models");

class ClassroomDao extends AbstractDao{
    constructor(){
        super(models.classroom);
    }
}

module.exports = ClassroomDao;