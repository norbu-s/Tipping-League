const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config.json');

class Competition extends Model {}

Competition.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
   name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
          type: DataTypes.INTEGER,
          references: {
            model: 'users',
            key: 'id',
      },
    },  
    },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Competition',
  }
);

module.exports = Competition;
