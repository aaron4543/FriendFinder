

// Requiring the friends data file
var friendsList = require('../data/friends.js');

module.exports = function(app) {

    // Sends json containing all friends data to url /api/friends
    app.get("/api/friends", function(req, res) {
        res.json(friendsList);
    });

    // Posts user data to freinds data
    app.post("/api/friends", function(req, res) {

        // Create new variable for storing best match info
        var bestMatch = {
            name: "",
            photo: "",
            scoreDiff: Infinity
        };

        // Store user data in variables
        userData = req.body;
        userScores = userData.scores;

        // Loops through list of friends
        for (var i = 0; i < friendsList.length; i++) {

            // Declare variables for calculations
            var diff = 0;
            var comparisonArr = [];

            // Loops through each array of scores within each friend object from friendsList
            for (var j = 0; j < userScores.length; j++) {

                // Calculates the diff between each question answered
                diff = Math.abs(friendsList[i].scores[j] - userScores[j]);

                // Pushes differences into new array for comparison
                comparisonArr.push(diff);
            };

            // Sums all item in new comparison array
            var totalDiff = comparisonArr.reduce(function (a, b) {
                return a + b;
            });

            // Console log each loop
            console.log('Comparrison values for - ' + friendsList[i].name + " " + comparisonArr);
            console.log('Sum for ' + friendsList[i].name + ' ' + totalDiff);

            // Condition for checking if current friend diff is higher or lower than...
            if (totalDiff <= bestMatch.scoreDiff) {
                bestMatch.name = friendsList[i].name;
                bestMatch.photo = friendsList[i].photo;
                bestMatch.scoreDiff = totalDiff;
            };

        }

        // Push userData into list of friends
        friendsList.push(userData);

        // Send best match modal json object
        res.json(bestMatch);

    });
}