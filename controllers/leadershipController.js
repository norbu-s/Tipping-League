const Users = require("../models/users");

const leadershipController = {
  findAll: function (req, res) {
    Users.findAll({
      where: { id: usersId },
      include: [
        {
          model: Tips,
          as: "id",
          where: {
            required: false,
          },
        },
      ],
    }).success(function (result) {
      callback(result);
    });
  },
};
// const leadershipController = {
//   leaderBoard: function (req, res) {
//     db.Tips.leaderBoard({
//       "SELECT name, points from Tipping_League.Users Inner Join Tipping_League.Tips on Users.id = Tips.usersId order by points ASC;":
//         function (error, points) {
//           if (error) throw error;
//           console.log(points);
//         },
//     });
//   },
// };

module.exports = leadershipController;
