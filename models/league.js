module.exports = function(sequelize, DataTypes) {

  const Leagues = sequelize.define('Leagues', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    competitonsId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Leagues',
        key: 'id'
      }
    }
  });
  return Leagues;
};