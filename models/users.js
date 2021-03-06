const bcrypt = require("bcrypt");
module.exports = function (sequelize, DataTypes) {
  const Users = sequelize.define("Users", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
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
    },
    notification: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
  });

  Users.associate = (models) => {
    Users.hasMany(models.Tips, {
      as: "tips",
      foreignKey: "usersId",
    });
  };

  Users.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };

  // Hash passwords before user is created
  // Users.addHook("beforeCreate", (user) => {
  //   user.password = bcrypt.hashSync(user.password, this.password);
  // });

  Users.addHook("beforeCreate", (user) => {
    user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
      null
    );
  });

  return Users;
};
