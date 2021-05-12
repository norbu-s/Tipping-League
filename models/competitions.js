module.exports = function (sequilize, DataTypes) {

  const Competitions = sequilize.define("Competitions", {
   
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
    },
  });
  

   Competitions.associate = (models) => {
    Competitions.belongsToMany(models.Users, {
      through: 'League',
      as: 'Users',
      foreignKey: 'CompetitionsId'
    });
  };

  return Competitions;
};