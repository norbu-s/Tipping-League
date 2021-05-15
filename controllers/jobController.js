const db = require("../models");
    
const jobController = {
  mailingList: function (req, res) {
    db.Users
        .findAll({
            attributes: ["notification" === 1]
        })
      .then(Users => res.json(Users))
      .catch(err => console.log(err))
  },
};

module.exports = jobController;
