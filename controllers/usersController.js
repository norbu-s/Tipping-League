const db = require("../models");



module.exports = {
 
  findAll: function(req, res) {
    db.Users
      .findAll()
      .then(Users => res.json(Users))
      .catch(err => console.log(err))
  },
  // findById: function(req, res) {
  //   db.User
  //     .findById(req.params.id)
  //     .then(dbUsers => res.json(dbUsers))
  //     .catch(err => res.status(422).json(err));
  // },

  SignUp: function (req, res) {

    db.Users 
      .create({
        name:req.body.name,
        email: req.body.email,
        password: req.body.password,
        checlbox:req.body.checkbox,
      })
      .then(Users => res.json(Users))
      .catch(err => res.status(422).json(err));
  }
  // update: function(req, res) {
  //   db.Users
  //     .findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then(dbUsers => res.json(dbUsers))
  //     .catch(err => res.status(422).json(err));
  // },
  // remove: function(req, res) {
  //   db.Users
  //     .findById({ _id: req.params.id })
  //     .then(dbUsers => dbUsers.remove())
  //     .then(dbUsers => res.json(dbUsers))
  //     .catch(err => res.status(422).json(err));
  // }
};