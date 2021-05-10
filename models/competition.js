module.exports = function (sequilize, DataTypes) {

  const Competition = sequilize.define("competition", {
   
    // name: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    // leagueID: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   foreignKey: {
    //     name: "leagueId",
    //     allowNull: false,
    //     onDelete: "CASCADE"
    //   }
    // }
  });

   Competition.associate = (models) => {
    Competition.belongsToMany(models.Users, {
      through: 'League',
      as: 'competiton',
      foreignKey: 'competitionId'
    });
  };

  return Competition;
};