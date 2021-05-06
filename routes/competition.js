const db = require("../models");

module.exports = function(app) {
    app.get("/api/league/:name", function(req, res) {
        db.Movies.findOne({
            where: {
                name: req.params.competition_name,
            },
        }).then((dbCompetition) => res.json(dbCompetition));
    });

     app.get('/api/leagues/', function(req, res) {
        db.Competition.findAll({}).then((dbCompetition) => res.json(dbCompetition));
    });

    app.post('/api/league', function(req, res) {
        console.log(req.body);
        db.Competition.create({
            name: req.body.competition_name,
            users: req.body.user_id,
        }).then((dbCompetition) => res.json(dbCompetition));
    });
    
   
}


    
//  app.delete('/api/competition/:id', (req, res) => {
//         db.Review.destroy({
//             where: {
//                 id: req.params.id,
//             },
//         }).then((dbReview) => res.json(dbReview));
//     });

//     // PUT route for updating posts
//     app.put('/api/competition', (req, res) => {
//          db.Competition.update(req.body, {
//             where: {
//                 id: req.body.id,
//             },
//         }).then((dbCompetition) => res.json(dbCompetition));
//     });
// };

