
const bcrypt = require('bcrypt');
module.exports = function (sequilize, DataTypes) {

  const Users = sequilize.define("Users", {
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
      allowNull: true,
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

  });
  Users.associate = (models) => {
    Users.belongsToMany(models.Competition, {
      through: 'League',
      as: 'competiton',
      foreignKey: 'userId'
    });
  },
  {
    hooks: {
      async beforeCreate(newUserData) {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
    },
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Users',
  }

  return Users;
};