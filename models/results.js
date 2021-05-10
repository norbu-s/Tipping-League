module.exports = function (sequilize, DataTypes) {

  const Results = sequilize.define("results", {
   
    points: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    points: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });
  Results.associate = models => {
    Results.hasOne(models.tips, {
      foreignKey: {
        name: "resultsId",
        allowNull: false
      },
      onDelete: "CASCADE"
    }),

      Results.belongsTo(models.Tips);
  },
  {
    freezeTableName: true,
    underscored: true,
    modelName: 'Results',
  }

  return Results;
}
