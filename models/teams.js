const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config.json');

class Teams extends Model {}

Teams.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
   team_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Teams',
  }
);

module.exports = Teams;
