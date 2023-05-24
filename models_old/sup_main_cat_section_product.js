'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sup_main_cat_section_product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  sup_main_cat_section_product.init({
    id: DataTypes.INTEGER,
    id_sup_main_cat_product: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'sup_main_cat_section_product',
  });
  return sup_main_cat_section_product;
};