const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Results
      .findAll(req.query)
      // .sort({ date: -1 })
      .then(dbResults => res.json(dbResults))
      .catch(err => res.status(422).json(err));
  },
  // findByPK: function(req, res) {
  //   db.Results
  //     .findByPK(req.params.id)
  //     .then(dbResults => res.json(dbResults))
  //     .catch(err => res.status(422).json(err));
  // },
  create: function(req, res) {
    db.Results
      .create(req.body)
      .then(dbResults => res.json(dbResults))
      .catch(err => res.status(422).json(err));
  },
//   update: function(req, res) {
//     db.Results
//       .findOneAndUpdate({ _id: req.params.id }, req.body)
//       .then(dbResults => res.json(dbResults))
//       .catch(err => res.status(422).json(err));
//   },
//   remove: function(req, res) {
//     db.Results
//       .findById({ _id: req.params.id })
//       .then(dbResults => dbResults.remove())
//       .then(dbResults => res.json(dbResults))
//       .catch(err => res.status(422).json(err));
//   }
};

