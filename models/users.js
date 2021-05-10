const { Models, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/config.json');

class Users extends Models {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
      validate: {
        len: [40],
      },
    },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [8, 30],
        },
      },
        Notification: {
          type: DataTypes.BOOLEAN,
          allowNull: true,
        },
        competitionId: {
          type: DataTypes.INTEGER,
          references: {
          model: 'competition',
          key: 'id',
      },
    },
  },
   User.hasMany(models.Competitions, {
      foreignKey: {
        name: "competitionId",
        allowNull: true
      },
      onDelete: "CASCADE"
   }),
   
  {
    hooks: {
      async beforeCreate(newUserData) {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Users',
  }
);


module.exports = Users;