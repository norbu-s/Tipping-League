module.exports = function (sequilize, DataTypes) {

  const Competition = sequilize.define("Competition", {
   
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tipId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: {
      name: "tipId",
      allowNull: false,
      onDelete: "CASCADE"
      }
    }
  });

   Competition.associate = (models) => {
    Competition.belongsToMany(models.Users, {
      through: 'League',
      as: 'Users',
      foreignKey: 'competitionId'
    });
  };

  return Competition;
};