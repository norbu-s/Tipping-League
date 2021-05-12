module.exports = function (sequilize, DataTypes) {

  const Tips = sequilize.define("Tips", {
    game: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    teamsId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Teams',
        key: 'id'
      }
    },
    competitonsId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Competitions',
        key: 'id'
      }
    }
    });

    return Tips;
  };
