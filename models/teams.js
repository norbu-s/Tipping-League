module.exports = function (sequelize, DataTypes) {
  const Teams = sequelize.define("Teams", {
    team_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
  Teams.associate = (models) => {
    Teams.hasMany(models.Tips, {
      as: "Tips",
      foreignKey: "teamsId",
    });
  };
  return Teams;
};
