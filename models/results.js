module.exports = function (sequilize, DataTypes) {

  const Results = sequilize.define("Results", {
   
    points: {
      type: DataTypes.INTEGER,
      allowNull: true,
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

  Results.associate = (models) => {
    Results.hasOne(models.Tips, {
      foreignKey: 'tipId'
    });
  };


  return Results;
};
