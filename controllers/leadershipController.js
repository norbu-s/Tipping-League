const db = require("../models");
// const leaderBoard = require ("../mysqlQueries/leaderBoard");

const leadershipController = {
  leaderBoard: function (req, res) {
    db.points
      .leaderBoard({
        "SELECT  name, points from Tipping_League.Users Inner Join Tipping_League.Tips on Users.id = Tips.usersIdorder by points ASC;":
        function(error, points) {
          if (error) throw error;
          console.log(points);
        }
      });
  }
}

module.exports = leadershipController;