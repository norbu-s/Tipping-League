module.exports = function (sequilize, DataTypes) {

  const Competition = sequilize.define("competition", {
   
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
    Competition.associate = models => {
    Competition.hasOne(models.review, {
      foreignKey: {
        name: "competitionId",
        allowNull: false
      },
      onDelete: "CASCADE"
    }),

    Competition.belongsTo(models.user);
  },
    {
      freezeTableName: true,
      underscored: true,
      modelName: 'competition',
    }

  return Competition;
};