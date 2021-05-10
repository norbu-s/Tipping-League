const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config.json');

class Tips extends Model {}

Tips.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
   competitionId: {
      type: DataTypes.INTEGER,
          references: {
            model: 'competitions',
            key: 'id',
      },
    },
    userId: {
          type: DataTypes.INTEGER,
          references: {
            model: 'users',
            key: 'id',
      },
    },
   teamId: {
          type: DataTypes.INTEGER,
          references: {
            model: 'teams',
            key: 'id',
     },
     game: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    },  
    },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Tips',
  }
);

module.exports = Tips;
