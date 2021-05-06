module.exports = (sequelize, DataTypes) => {

    const Tips = sequelize.define('Tips', {

        competitionId: DataTypes.INTEGER,
        userId: DataTypes.INTEGER,
        teamId:DataTypes.INTEGER,
        game: DataTypes.INTEGER,
    });
    
    Tips.associate = (models) => {
    Tips.hasMany(models.Users, {
      onDelete: 'cascade',
    });
  };

    Tips.associate = (models) => {
    Tips.hasOne(models.Competition, {
      onDelete: 'cascade',
    });
  };
    
    Tips.associate = (models) => {
    Tips.hasOne(models.Team, {
      onDelete: 'cascade',
    });
  };


  return Competition;
};

