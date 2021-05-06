const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('users', {
      
        firstName: {
            type: DataTypes.DATE,
            field: 'first_name'
        },
        lastName: {
            type: DataTypes.DATE,
            field: 'last_name'
        },
        email: DataTypes.STRING,
        password: DataTypes.STRING
    }, {
        freezeTableName: true,
        instanceMethods: {
            generateHash(password) {
                return bcrypt.hash(password, bcrypt.genSaltSync(8));
            },
            validPassword(password) {
                return bcrypt.compare(password, this.password);
            }
        }
  });
    
  Users.associate = (models) => {
    Users.hasMany(models.Competition, {
      foreignKey: {
        allowNull: false,
      },
      onDelete: 'cascade',
    });
  };

  return Users;
};