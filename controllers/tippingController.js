const db = require("../models");
const router = require('express').Router();

const tipsController = {
  getAll: function(req, res) {
    db.Tipping_League
      .find({})
      .then(model => res.json(model))
      .catch(err => res.status(422).json(err))
  },
  save: function(req, res) {
    db.Tipping_League
      .create({
        tipsId: req.body.id,
        competitionID: req.body.competitionID,
        userId: req.body.userId,
        teamId: req.body.userId,
        game: req.body.game
      })
      .then(model => res.json(model))
      .catch(err => res.status(422).json(err))
  },
//   delete: function(req, res) {
//     db.Tipping_League
//       .findOneAndDelete({ competitionId: req.params.id })
//       .then(model => res.json(model))
//       .catch(err => res.status(422).json(err))
//   }
}

module.exports = tipsController;