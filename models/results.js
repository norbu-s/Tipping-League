module.exports = function (sequilize, DataTypes) {

  const Results = sequilize.define("Results", {
   
    points: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }
  });
  
  // Results.associate = models => {
  //   Results.hasOne(models.Tips, {
  //    through: 'Tips',
  //     as: 'tips',
  //     foreignKey: 'tipId',
  //     onDelete: "CASCADE"
  //   }),

  //     Results.belongsTo(models.Tips);
  // };

  return Results;
};
