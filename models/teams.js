module.exports = (sequelize, DataTypes) => {

    const Teams = sequelize.define('Teams', {

        team_name: DataTypes.STRING,
    },
    );
      return Teams;
}