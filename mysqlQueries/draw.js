const draw = {
    function() {

"Select id, usersId, name, team_name, match_number, draw from Tipping_League.Teams Inner Join Tipping_League.Tips using(id)Inner Join Tipping_League.Users using (id)Inner Join Tipping_League.Fixtures using (id) where draw != '0' and fixturesId = '12';"
    }
};

module.exports = draw;