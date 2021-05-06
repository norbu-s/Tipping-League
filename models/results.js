module.exports = (sequelize, DataTypes) => {
  const Results = sequelize.define('Results', {

        points: DataTypes.INTEGER,
        round:DataTypes.STRING,
        tipId: DataTypes.INTEGER,
  });

  Results.associate = (models) => {
    Results.hasOne(models.Tips, {
      foreignKey: {
        allowNull: false,
      },
      onDelete: 'cascade',
    });
  };

  return Results;
};

