module.exports = function (sequilize, DataTypes) {

  const Tips = sequilize.define("Tips", {
    teamsId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      foreignKey: {
        name: "teamsId",
        allowNull: true,
      }
    },
    draw:{
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    points: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    fixturesId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      foreignKey: {
        name: "fixturesId",
        allowNull: false,
      }
    },
  });
  // Tips.associate = (models) => {
  //   Tips.hasOne(models.Fixtures, {
  //     as: "Fixtures",
  //     foreignKey:"fixturesId"

  //   });
  // };
  // Tips.associate = (models) => {
  //   Tips.hasOne(models.Teams, {
  //     as: "Teams",
  //     foreignKey:"teamsId"
  //   });
  // };
    return Tips;
  };