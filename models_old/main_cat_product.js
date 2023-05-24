'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class main_Cat_Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  main_Cat_Product.init({
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  }, {
    sequelize,
    modelName: 'main_Cat_Product',
  });
  return main_Cat_Product;
};