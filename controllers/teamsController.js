const db = require("../models");

const teamsController = {
  getAll: function(req, res) {
    db.Teams
      .find({})
      .then(model => res.json(model))
      .catch(err => res.status(422).json(err))
  },
  findById: function(req, res) {
    db.Teams
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
}

module.exports = teamsController;