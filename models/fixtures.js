module.exports = function (sequilize, DataTypes) {

    const Fixtures = sequilize.define("Fixtures", {
        match_number: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        round_number: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        Date: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        location: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        home_team: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        away_team: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        results: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    });
    Fixtures.associate = (models) => {
    Fixtures.hasMany(models.Tips, {
      as: "Tips",
      foreignKey:"fixturesId"
    });
  };
    return Fixtures;
};