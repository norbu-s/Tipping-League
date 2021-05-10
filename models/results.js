const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config.json');

class Results extends Model {}

Results.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
   points: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    tipId: {
          type: DataTypes.INTEGER,
          references: {
            model: 'tips',
            key: 'id',
      },
    },
    points: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Results',
  }
);

module.exports = Results;
