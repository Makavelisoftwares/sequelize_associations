'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({posts}) {
      // define association here
    }
  }
  users.init({
    username: {
      type:DataTypes.STRING
    },
    password: {
      type:DataTypes.STRING
    },
    uuid:{
      type:DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4
    }
  }, {
    sequelize,
    tableName:'users',
    modelName: 'users',
  });
  return users;
};