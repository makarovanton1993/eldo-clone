'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class basket_device extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  basket_device.init({
    id: DataTypes.INTEGER,
    id_basket: DataTypes.INTEGER,
    id_device: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'basket_device',
  });
  return basket_device;
};