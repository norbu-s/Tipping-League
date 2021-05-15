module.exports = function (sequilize, DataTypes) {

  const Teams = sequilize.define("Teams", {
    team_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  return Teams;
}
