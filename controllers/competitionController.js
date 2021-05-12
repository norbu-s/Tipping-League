const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Competition
      .findAll(req.query)
      // .sort({ date: -1 })
      .then(dbCompetition => res.json(dbCompetition))
      .catch(err => res.status(422).json(err));
  },
  findByPk: function(req, res) {
    db.Competition
      .findByPk(req.params.id)
      .then(dbCompetition => res.json(dbCompetition))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Competition
      .create(req.body)
      .then(dbCompetition => res.json(dbCompetition))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Competition
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbCompetition => res.json(dbCompetition))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Competition
      .findByPk({ _id: req.params.id })
      .then(dbCompetition => dbCompetition.remove())
      .then(dbCompetition => res.json(dbCompetition))
      .catch(err => res.status(422).json(err));
  }
};
