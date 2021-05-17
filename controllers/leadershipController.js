const db = require("../models");

const leadershipController = {
  findAll: function (req, res) {
    db.Users.findAll({
      // where: { id: usersId },
      include: [
        {
          model: db.Tips,
          as: "tips",
          // order: [["points", "ASC"]],
          required: false,
        },
      ],
    }).then(function (result) {
      // console.log(result);
      res.json(result);
    });
  },
};

module.exports = leadershipController;
