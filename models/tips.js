module.exports = function (sequilize, DataTypes) {

  const Tips = sequilize.define("Tips", {
    teamsId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      foreignKey: {
        name: "teamsId",
        allowNull: true,
      },
      usersId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        foreignKey: {
          name: "usersId",
          allowNull: true,
        }
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

    return Tips;
  };