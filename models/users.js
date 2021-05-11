
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
    // leagueID: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   foreignKey: {
    //     name: "leagueId",
    //     allowNull: false,
    //     onDelete: "CASCADE"
    //   }
    // }
  });
  Users.associate = (models) => {
    Users.belongsToMany(models.Competition, {
      through: 'League',
      as: 'competiton',
      foreignKey: 'userId'
    });
  };

  Users.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };

  Users.addHook("beforeCreate", users => {
    users.password = bcrypt.hashSync(
      users.password,
      bcrypt.genSaltSync(10),
      null
    );
  });

  return Users;
};