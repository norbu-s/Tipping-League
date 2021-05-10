module.exports = function (sequilize, DataTypes) {

  const Tips = sequilize.define("Tips", {
    game: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  });

    Tips.associate = models => {
      Tips.hasOne(models.users, {
        foreignKey: {
          name: "userId",
          allowNull: false
        },
        foreignKey: {
          name: "teamId",
          allowNull: false
        },
        foreignKey: {
          name: "competitionId",
          allowNull: false
        },
        onDelete: "CASCADE"
      }),
        Tips.belongsTo(models.users);
        Tips.belongsTo(models.competitions);
        Tips.belongsTo(models.teams);
    },
   {
      freezeTableName: true,
      underscored: true,
      modelName: 'Tips',
    }

  return Tips;
}
