const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Tips
      .findAll()
      .then(Tips => res.json(Tips))
      .catch(err => console.log(err))
  },
  findById: function(req, res) {
    db.Tips
      .findById(req.params.id)
      .then(dbTips => res.json(dbTips))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Tips
      .create({
       teamsId:req.body.teamsId,
       usersId: req.body.usersId,
        draw: req.body.draw,
       fixturesId:req.body.fixturesId,
      })
      .then(dbTips => res.json(dbTips))
      .catch(err => res.status(422).json(err));
  },
  addPoints: function(req, res) {
    db.Tips
      .findOneAndUpdate({ _id: req.params.id },
        req.body.points)
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
