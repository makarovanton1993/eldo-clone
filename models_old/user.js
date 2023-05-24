'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    id:DataTypes.INTEGER,
    name: DataTypes.STRING,
    fam: DataTypes.STRING,
    patronymic: DataTypes.STRING,
    email: {
      type:DataTypes.STRING,
      unique:true,
      isEmail: true,
    },
    tel: {
      type:DataTypes.NUMBER,
      unique:true,
    },
    birstDay: DataTypes.NUMBER,
    password: DataTypes.NUMBER,
    marital_status:DataTypes.STRING,
    floor:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};