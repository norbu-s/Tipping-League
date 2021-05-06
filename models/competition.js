module.exports = (sequelize, DataTypes) => {
  const Competition = sequelize.define('Competition', {

     competition_name: DataTypes.STRING,
        userId: DataTypes.INTEGER,
  });

  Competition.associate = (models) => {
    Competition.hasMany(models.Users, {
      foreignKey: {
        allowNull: false,
      },
      onDelete: 'cascade',
    });
  };

  return Competition;
};

