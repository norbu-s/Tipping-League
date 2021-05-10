
const bcrypt = require('bcrypt');
module.exports = function (sequilize, DataTypes) {

  const Users = sequilize.define("Tips", {
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
    }
  });
  Users.associate = models => {
    Users.hasMany(models.competition, {
      foreignKey: {
        name: "competitionId",
        allowNull: false
      },
      onDelete: "CASCADE"
    }),
        
      class Users extends Models {
        checkPassword(loginPw) {
          return bcrypt.compareSync(loginPw, this.password);
        }
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
    };

    return Users;
  }
}