module.exports = function (sequilize, DataTypes) {

    const League = sequilize.define('League', {
        desc: {
      allowNull: false,
      type: DataTypes.STRING,
      defaultValue: 'no description'
    },
    admin: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true
      }
    }
  });
  League.associate = (models) => {
    league.belongsToMany(models.Users, {
      through: 'League',
      as: 'users',
      foreignKey: 'leagueId'
    });
  };
  return League;
};