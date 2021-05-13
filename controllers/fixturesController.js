const db = require("../models");

const fixturesController = {

  findAll: function(req, res) {
    db.Fixtures
      .findAll()
      .then(Fixtures => res.json(Fixtures))
      .catch(err => console.log(err))
  },
};

module.exports = fixturesController;