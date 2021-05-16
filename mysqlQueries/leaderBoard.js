const leaderBoard = {
    function() {
        "SELECT  name, points from Tipping_League.Users Inner Join Tipping_League.Tips on Users.id = Tips.usersIdorder by points ASC;"
    }
};

module.exports = leaderBoard;








