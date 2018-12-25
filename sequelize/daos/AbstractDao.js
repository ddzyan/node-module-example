class AbstractDao {
  constructor(model) {
    this.model = model;
  }

  /**
   * 获取计数
   * @param {Object} where
   * @returns {Promise} count
   */
  async count(where) {
    try {
      const count = await this.model.count({
        where
      });

      return count;
    } catch (error) {
      throw error;
    }
  }

  /**
   * 获取指定Id数据
   * @param {integer} id
   * @returns{Promise} dataValues of null
   */
  async load(id) {
    try {
      const result = await this.model.findBypk(id);
      const re = result && result.dataValues ? result.dataValues : null;
      return re;
    } catch (error) {
      throw error;
    }
  }

  /**
   * 插入数据
   * @param {Object} param
   * @returns {Promise} result
   */
  async create(param) {
    try {
      const result = await this.model.create(param);
      const re = result && result.dataValues ? result.dataValues : null;
      return re;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = AbstractDao;
