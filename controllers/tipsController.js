const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Tips
      .find(req.query)
      .sort({ date: -1 })
      .then(dbTips => res.json(dbTips))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Tips
      .findById(req.params.id)
      .then(dbTips => res.json(dbTips))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Tips
      .create(req.body)
      .then(dbTips => res.json(dbTips))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Tips
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbTips => res.json(dbTips))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Tips
      .findById({ _id: req.params.id })
      .then(dbTips => dbTips.remove())
      .then(dbTips => res.json(dbTips))
      .catch(err => res.status(422).json(err));
  }
};


module.exports = tipsController;