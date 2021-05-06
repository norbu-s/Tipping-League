const db = require("../models");

const teamsController = {
  getAll: function(req, res) {
    db.Teams
      .find({})
      .then(teams => res.json(teams))
      .catch(err => res.status(422).json(err))
  },
  findById: function(req, res) {
    db.Teams
      .findById(req.params.id)
      .then(dbTeams=> res.json(dbTeams))
      .catch(err => res.status(422).json(err));
  },
}
