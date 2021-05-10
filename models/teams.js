module.exports = function (sequilize, DataTypes) {

  const Teams = sequilize.define("teams", {
    team_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
    {
      freezeTableName: true,
      underscored: true,
      modelName: 'Teams',
    }
  );
  return Teams;
}
