module.exports = function(sequelize, DataTypes) {

  const League = sequelize.define('League', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    competitonId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Competition',
        key: 'id'
      }
    }
  });
  return League;
};