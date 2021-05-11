module.exports = function (sequilize, DataTypes) {

  const Teams = sequilize.define("Teams", {
    team_name: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });

  Teams.associate = (models) => {
    Teams.belongsToMany(models.Results, {
      through: 'Tips',
      as: 'teams',
      foreignKey: 'teamsId'
    });
  };

  return Teams;
}
