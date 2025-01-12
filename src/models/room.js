"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Room.init(
    {
      area: DataTypes.INTEGER,
      cost: DataTypes.INTEGER,
      average_rate: DataTypes.FLOAT,
      utilities: DataTypes.JSON,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Room",
    }
  );
  return Room;
};
