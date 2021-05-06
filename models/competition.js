        module.exports = (sequelize, DataTypes) => {

            const Competition = sequelize.define('Movies', {

                competition_name: DataTypes.STRING,
                userId: DataTypes.INTEGER,
            },
        );
            return Competition;
        };
