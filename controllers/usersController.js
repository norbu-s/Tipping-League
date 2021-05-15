const db = require("../models");

const usersController = {
  SignUp: function (req, res) {

    db.Users 
      .create({
        name:req.body.name,
        email: req.body.email,
        password: req.body.password,
        notification:req.body.notification,
      })
      .then(Users => res.json(Users))
      .catch(err => {
        console.log(err)
        res.status(422).json(err)
      });
  },
  findAll: function(req, res) {
    db.Users
      .findAll()
      .then(Users => res.json(Users))
      .catch(err => console.log(err))
  },
};

module.exports = usersController;