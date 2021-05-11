const db = require("../models");

module.exports = {
 
  findAll: function(req, res) {
    db.Users
      .findAll()
      .then(Users => res.json(Users))
      .catch(err => console.log(err))
  },
  findById: function(req, res) {
    db.User
      .findById(req.params.id)
      .then(Users => res.json(Users))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Users
      .create(req.body)
      .then(Users => res.json(Users))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Users
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(Users => res.json(Users))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Users
      .findById({ _id: req.params.id })
      .then(Users => Users.remove())
      .then(Users => res.json(Users))
      .catch(err => res.status(422).json(err));
  }
};