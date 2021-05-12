
const bcrypt = require('bcrypt');
module.exports = function (sequilize, DataTypes) {

  const Users = sequilize.define("Users", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true, 
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
      validate: {
        len: [1, 40],
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
    // notification: {
    //   type: DataTypes.BOOLEAN,
    //   allowNull: true,
    // },

  });
  Users.associate = (models) => {
    Users.belongsToMany(models.Competition, {
      through: 'League',
      as: 'competiton',
      foreignKey: 'userId'
    });
  },
  Users.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };

  // Hash passwords before user is created
  Users.addHook("beforeCreate", users => {
    Users.password = bcrypt.hashSync(
      Users.password,
      bcrypt.genSaltSync(10),
      null
    );
  });

  return Users;
};