module.exports = (sequelize, DataTypes) => {

    const Tips = sequelize.define('Tips', {

        competitionId: DataTypes.INTEGER,
        userId: DataTypes.INTEGER,
        teamId:DataTypes.INTEGER,
        game: DataTypes.INTEGER,
    });
    
    Tips.associate = (models) => {
      Tips.hasMany(models.Users, {
      foreignKey: {
        allowNull: false,
      },
      onDelete: 'cascade',
    });
  };

    Tips.associate = (models) => {
      Tips.hasOne(models.Competition, {
      foreignKey: {
        allowNull: false,
      },
      onDelete: 'cascade',
    });
  };
    
    Tips.associate = (models) => {
      Tips.hasMany(models.Team, {
      foreignKey: {
        allowNull: false,
      },
      onDelete: 'cascade',
    });
  };


  return Tips;
};

