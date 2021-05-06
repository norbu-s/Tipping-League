// const db = require("../models");
// const router = require('express').Router();

// const resultsController = {
//   getAll: function(req, res) {
//     db.Results
//       .find({})
//       .then(model => res.json(model))
//       .catch(err => res.status(422).json(err))
//   },
//   save: function(req, res) {
//     db.Results
//       .create({
//         competitionId: req.body.id,
//         competition_name: req.body.name,
//         userId: req.body.userId,
//       })
//       .then(model => res.json(model))
//       .catch(err => res.status(422).json(err))
//   },
//   delete: function(req, res) {
//     db.Results
//       .findOneAndDelete({ competitionId: req.params.id })
//       .then(model => res.json(model))
//       .catch(err => res.status(422).json(err))
//   }
// }

// module.exports = resultsController;