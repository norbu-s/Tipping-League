const db = require("../Tipping_League");
const router = require('express').Router();

const competitionController = {
  getAll: function(req, res) {
    db.Tipping_League
      .find({})
      .then(model => res.json(model))
      .catch(err => res.status(422).json(err))
  },
  save: function(req, res) {
    db.Tipping_League
      .create({
        competitionId: req.body.id,
        competition_name: req.body.name,
        userId: req.body.userId,
      })
      .then(model => res.json(model))
      .catch(err => res.status(422).json(err))
  },
  delete: function(req, res) {
    db.Tipping_League
      .findOneAndDelete({ competitionId: req.params.id })
      .then(model => res.json(model))
      .catch(err => res.status(422).json(err))
  }
}

module.exports = competitionController;