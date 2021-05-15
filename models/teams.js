module.exports = function (sequilize, DataTypes) {

  const Teams = sequilize.define("Teams", {
    team_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
  Teams.associate = (models) => {
    Teams.hasMany(models.Tips, {
      as: "Tips",
      foreignKey: "teamsId"
    });
  }
  return Teams;
}
