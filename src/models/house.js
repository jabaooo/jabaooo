"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class House extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  House.init(
    {
      house_name: DataTypes.STRING,
      address: DataTypes.STRING,
      number_of_room: DataTypes.INTEGER,
      average_rate: DataTypes.FLOAT,
      image: DataTypes.JSON,
      createAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "House",
    }
  );
  return House;
};
