const draw = {
    function() {
    "Select id, teamsId, tipsId, team_name, match_number, draw from Tipping_League.Teams Inner Join Tipping_League.Tips using(id)Inner Join Tipping_League.Fixtures using (id) where draw = '0' and match_number = '9';"
    }
};

module.exports = draw;