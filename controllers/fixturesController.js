const db = require("../models");

const fixturesController = {
  findAll: function (req, res) {
    db.Fixtures.findAll()
      .then((Fixtures) => res.json(Fixtures))
      .catch((err) => console.log(err));
  },
  findByPk: function (req, res) {
    db.Fixtures.findByPk()
      .findByPk(req.params.id)
      .then((dbTips) => res.json(dbTips))
      .catch((err) => res.status(422).json(err));
  },
};

module.exports = fixturesController;
